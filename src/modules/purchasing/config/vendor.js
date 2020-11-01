export const vendor_columns = [
  {
    title: "Vendor No.",
    dataIndex: "vendor_no",
    key: "vendor_no",
    width: "10%",
    align: "left",
    sorter: {
      compare: (a, b) => a.vendor_id - b.vendor_id,
      multiple: 3,
    },
  },
  {
    title: "Name",
    dataIndex: "vendor_name",
    key: "vendor_name",
    width: "35%",
    align: "left",
    ellipsis: true,
  },
  {
    title: "Tax ID.",
    dataIndex: "vendor_tax_no",
    key: "vendor_tax_no",
    width: "15%",
    align: "left",
    ellipsis: true,
  },
  {
    title: "Phone",
    dataIndex: "vendor_phone",
    key: "vendor_phone",
    width: "10%",
    align: "left",
    ellipsis: true,
  },
  {
    title: "Email",
    dataIndex: "vendor_email",
    key: "vendor_email",
    width: "20%",
    align: "left",
    ellipsis: true,
  },
  {
    title: "Currency",
    dataIndex: "currency_no",
    key: "currency_no",
    width: "10%",
    align: "center",
  },
];

export const vendor_fields = {
  vendor_id: null,
  vendor_no: null,
  vendor_name: null,
  vendor_name_th: null,
  vendor_name_short: null,
  vendor_address: null,
  vendor_address_th: null,
  vendor_sold_to: null,
  vendor_ship_to: null,
  vendor_limit_credit: null,
  vendor_tax_no: null,
  vendor_email: null,
  vendor_phone: null,
  vendor_mobile: null,
  vendor_website: null,
  vendor_remark: null,
  vendor_actived: 1,
  vendor_created: null,
  vendor_created_by: null,
  vendor_updated: null,
  vendor_updated_by: null,
  language_id: null,
  country_id: null,
  province_id: null,
  district_id: null,
  tambon_id: null,
  zip_id: null,
  payment_term_id: null,
  language_no: null,
  language_name: null,
  language_no_name: null,
  country_no: null,
  country_name: null,
  country_no_name: null,
  province_no: null,
  province_name: null,
  province_no_name: null,
  district_no: null,
  district_name: null,
  district_no_name: null,
  tambon_no: null,
  tambon_name: null,
  tambon_no_name: null,
  zip_no: null,
  zip_name: null,
  zip_no_name: null,
  payment_term_no: null,
  payment_term_name: null,
  payment_term_no_name: null,
  vat_no: null,
  vat_name: null,
  vat_no_name: null,
  currency_name: null,
  currency_no_name: null,
  vat_id: 1,
  vat_rate: 0.07,
  currency_id: 1,
  currency_no: "THB",
  commit: 1,
};
