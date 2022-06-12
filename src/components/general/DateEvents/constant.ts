export enum EventCategory {
  Uncategorized = "uncategorized",
  Iran = "iran",
  IranHistory = "iran-history",
  Unitednations = "Unitednations",
  WorldwideHolidays = "WorldwideHolidays",
  ShiaDays = "ShiaDays",
  WWI = "WWI",
  WWII = "WWII",
}

export const dateEventCategories: {
  value: string;
  label: string;
}[] = [
  {
    value: EventCategory.Uncategorized,
    label: "بدون دسته بندی",
  },
  {
    value: EventCategory.Iran,

    label: "ایران",
  },
  {
    value: EventCategory.IranHistory,

    label: "تاریخچه ایران",
  },
  {
    value: EventCategory.Unitednations,

    label: "سازمان ملل متحد",
  },
  {
    value: EventCategory.WorldwideHolidays,

    label: "مناسبت های جهانی",
  },
  {
    value: EventCategory.ShiaDays,
    label: "مناسبت های شیعیان",
  },
  {
    value: EventCategory.WWI,
    label: "جنگ جهانی اول",
  },
  {
    value: EventCategory.WWII,
    label: "جنگ جهانی دوم",
  },
];
