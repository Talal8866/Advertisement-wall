const express = require("express");

const uploadLogo = require("../middlewares/uploadImageMiddleware");
const {
  updatecompany,
  deletecompany,
  approveCompany,
  createCompany,
  getCompaniesByCategory,
  getPendingCompanies,
  getallcompany,
  searchCompaniesByName,
  searchCompaniesByCategoryAndLocation,
} = require("../controllers/companyService");
const router = express.Router();
const auth = require("../controllers/authService");
// [الزبون] إرسال طلب اشتراك شركة جديدة (يحتاج موافقة الأدمن)
// @route   POST /api/companies
// @desc    يقوم الزبون بإرسال بيانات شركته ليتم مراجعتها من قبل الأدمن
router.post("/", uploadLogo.uploadSingleImage("logo"), createCompany);

// [الأدمن] جلب جميع الشركات المسجلة (مع إمكانية الفلترة والموافقة)
// @route   GET /api/companies
// @desc    يعرض جميع الشركات (يمكن للأدمن فقط رؤية الشركات غير الموافق عليها)
// ملاحظة: يجب حماية هذا الرابط ليكون للأدمن فقط لاحقاً
// مثال: ?isApproved=false لجلب الشركات التي تنتظر الموافقة

router.get("/", getallcompany);

// البحث عن الشركات بالاسم
router.get("/search", searchCompaniesByName);
// البحث عن الشركات بالمدينة والدولة
//router.get("/search-location", searchCompaniesByLocation);

// جلب الشركات حسب التصنيف
// البحث عن الشركات ضمن الفئة باستخدام المدينة أو الدولة أو كلاهما
router.get(
  "/category/:categoryId/search-location",
  searchCompaniesByCategoryAndLocation
);
router.get("/category/:categoryId", getCompaniesByCategory);

// تحديث شركة

router.put("/update/:id", auth.protect, updatecompany);
// جلب الشركات غير الموافق عليها (طلبات الاشتراك)

router.get(
  "/pending",
  //   auth.protect,
  //   auth.allowedTo("admin"),
  getPendingCompanies
);

// حذف شركة
router.delete("/delete/:id", deletecompany);

// موافقة الأدمن على إضافة شركة
router.patch(
  "/:id/approve",
  auth.protect,
  auth.allowedTo("admin"),
  approveCompany
);

module.exports = router;
