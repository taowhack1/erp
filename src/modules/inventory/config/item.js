export const item_vendor_columns = [
  {
    id: 0,
    name: "Vendor Name",
    size: 7,
    require: true,
  },
  {
    id: 1,
    name: "Lead time(day)",
    size: 3,
    require: true,
  },
  {
    id: 2,
    name: "Quantity",
    size: 3,
    require: true,
  },
  {
    id: 3,
    name: "Unit",
    size: 2,
    require: true,
  },
  {
    id: 4,
    name: "Price per unit",
    size: 3,
    require: true,
  },
  {
    id: 5,
    name: "Remark",
    size: 5,
  },
];

export const item_fields = {
  item_id: 0,
  item_no: null,
  item_name: null,
  item_name_th: null,
  item_image_path: null,
  item_sale: 1,
  item_purchase: 1,
  item_price: 0,
  item_cost: 0,
  item_barcode: null,
  item_weight: 0,
  item_mfd_leadtime: 0,
  item_min: 0,
  item_max: 0,
  item_customer_run_no: "SRL",
  uom_id: null,
  uom_name: null,
  type_id: null,
  type_name: null,
  category_id: null,
  category_name: null,
  tg_item_qty: null,
  branch_id: 1,
  branch_name: null,
  identify_benefit_id: 1,
  identify_benefit_name: null,
  item_remark: null,
  item_actived: 1,
  item_created_by: null,
  item_updated_by: null,
  vat_id: 1,
  user_name: null,

  item_trade_name: null,
  item_shelf_life: 0,
  item_sale_local: false,
  item_sale_export: false,
  item_specification: false,
  item_msds: false,
  item_quotation: false,
  item_halal_cert: false,
  item_non_haram: false,
  item_non_halal: false,

  commit: 1,
};
export const item_detail_fields = {
  id: null,
  item_vendor_lead_time: 0,
  item_vendor_min_qty: 0,
  vendor_id: null,
  vendor_no_name: null,
  item_id: null,
  item_no_name: null,
  uom_id: null,
  uom_no: null,
  commit: 1,
};

export const item_show_columns = [
  {
    title: "Code",
    dataIndex: "item_no",
    width: "10%",
    align: "left",
  },
  {
    title: "Item Name",
    dataIndex: "item_name",
  },
  {
    title: "Unit",
    dataIndex: "uom_name",
    width: "10%",
    align: "left",
  },
  {
    title: "Category",
    dataIndex: "category_name",
    ellipsis: true,
    width: "10%",
  },
  {
    title: "Description",
    dataIndex: "item_remark",
    ellipsis: true,
  },
];

export const item_require_fields = [
  "item_name",
  "item_customer_run_no",
  "uom_id",
  "type_id",
  "category_id",
];
export const item_vendor_require_fields = [
  "vendor_id",
  "item_vendor_lead_time",
  "item_vendor_min_qty",
  "item_vendor_price",
  "uom_id",
  "type_id",
  "category_id",
];