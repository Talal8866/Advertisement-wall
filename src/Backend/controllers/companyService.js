const Company = require("../model/companyModel");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
const factory = require("./handlersFactory");

// @desc    Create a new company (subscription request)
// @route   POST /api/companies
// @access  Public
exports.createCompany = asyncHandler(async (req, res, next) => {
  const {
    companyName,
    categoryId,
    description,

    country,
    city,
    email,
    whatsapp,
    facebook,
    website,
  } = req.body;

  // Handle logo upload (if available)
  let logo = "";
  if (req.file) {
    logo = req.file.filename;
  }

  const company = await Company.create({
    companyName,
    categoryId,
    description,
    logo,

    country,
    city,
    email,
    whatsapp,
    facebook,
    website,
    isApproved: false, // default: pending admin approval
  });

  res.status(201).json({
    status: "success",
    message: "تم إرسال طلب الاشتراك بنجاح. سيتم مراجعته من قبل الإدارة.",
    data: company,
  });
});
// [الأدمن] جلب جميع الشركات المسجلة (مع إمكانية الفلترة)
// @route   GET /api/companies
// @desc    يعرض جميع الشركات ويمكن الفلترة حسب الموافقة (?isApproved=false)
exports.getallcompany = factory.getAll(Company);

// @desc    Search companies by name
// @route   PUT /api/companies/update/:id
// @access  protcted
exports.updatecompany = factory.updateOne(Company);
// @desc    Search companies by name
// @route   PUT /api/companies/delete/:id
// @access  protcted
exports.deletecompany = factory.deleteOne(Company);
// @desc    Get companies by category
// @route   GET /api/companies/category/:categoryId
// @access  Public
exports.getCompaniesByCategory = asyncHandler(async (req, res, next) => {
  const { categoryId } = req.params;
  const companies = await Company.find({ categoryId, isApproved: true });
  res.status(200).json({
    status: "success",
    results: companies.length,
    data: companies,
  });
});

// @desc    Search companies by name
// @route   GET /api/companies/search?name=اسم_الشركة
// @access  Public
exports.searchCompaniesByName = asyncHandler(async (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    return next(new ApiError("يرجى إدخال اسم الشركة للبحث", 400));
  }
  const companies = await Company.find({
    companyName: { $regex: name, $options: "i" },
    isApproved: true,
  });
  res.status(200).json({
    status: "success",
    results: companies.length,
    data: companies,
  });
});

// @desc    Get all pending companies (admin only)
// @route   GET /api/companies/pending
// @access  Admin
exports.getPendingCompanies = asyncHandler(async (req, res, next) => {
  const pendingCompanies = await Company.find({ isApproved: false });
  res.status(200).json({
    status: "success",
    results: pendingCompanies.length,
    data: pendingCompanies,
  });
});

// @desc    Search companies by city and country
// @route   GET /api/companies/search-location?city=...&country=...
// @access  Public
exports.searchCompaniesByLocation = asyncHandler(async (req, res, next) => {
  const { city, country } = req.query;
  if (!city && !country) {
    return next(new ApiError("يرجى إدخال المدينة أو الدولة للبحث", 400));
  }
  const query = { isApproved: true };
  if (city) query.city = { $regex: city, $options: "i" };
  if (country) query.country = { $regex: country, $options: "i" };

  const companies = await Company.find(query);
  res.status(200).json({
    status: "success",
    results: companies.length,
    data: companies,
  });
});

// @desc    Search companies by category and (city or country)
// @route   GET /api/companies/category/:categoryId/search-location?city=...&country=...
// @access  Public
exports.searchCompaniesByCategoryAndLocation = asyncHandler(async (req, res, next) => {
  const { city, country } = req.query;
  const { categoryId } = req.params;
  if (!categoryId) {
    return next(new ApiError('يرجى تحديد الفئة', 400));
  }
  const query = { categoryId, isApproved: true };
  if (city) query.city = { $regex: city, $options: 'i' };
  if (country) query.country = { $regex: country, $options: 'i' };
  // إذا لم يتم تمرير city أو country، يرجع كل الشركات ضمن الفئة
  const companies = await Company.find(query);
  res.status(200).json({
    status: 'success',
    results: companies.length,
    data: companies
  });
});

// @desc    Admin approve company
// @route   PATCH /api/companies/:id/approve
// @access  Admin
exports.approveCompany = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const company = await Company.findById(id);
  if (!company) {
    return next(new ApiError("الشركة غير موجودة", 404));
  }
  if (company.isApproved) {
    return next(new ApiError("تمت الموافقة على الشركة مسبقاً", 400));
  }
  company.isApproved = true;
  await company.save();
  res.status(200).json({
    status: "success",
    message: "تمت الموافقة على الشركة بنجاح",
    data: company,
  });
});
