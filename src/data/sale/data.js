import numeral from "numeral";
export const customers = [
  { id: 0, value: "Vendor 1" },
  { id: 1, value: "Vendor 2" },
  { id: 2, value: "Vendor 3" },
];
export const customerColumns = [
  {
    title: "Name",
    dataIndex: "c_name",
    key: "c_name",
    width: "25%",
    align: "left",
  },
  {
    title: "Phone",
    dataIndex: "c_phone",
    key: "c_phone",
    width: "10%",
    align: "left",
  },
  {
    title: "Email",
    dataIndex: "c_email",
    key: "c_email",
    width: "20%",
    align: "left",
  },
  {
    title: "Company",
    dataIndex: "c_company",
    key: "c_company",
    width: "25%",
    align: "left",
  },
  {
    title: "Tax ID",
    dataIndex: "c_tax_id",
    key: "c_tax_id",
    width: "20%",
    align: "left",
  },
];

export const customerData = [
  {
    id: 0,
    c_code: "CUS20090001",
    c_name: "บริษัท ผู้ซื้อ 1 จำกัด",
    c_company: "บริษัท ผู้ซื้อ 1 จำกัด",
    c_phone: "038-821-991",
    c_mobile: "-",
    c_email: "cus20090001@gmail.co.th",
    c_tax_id: "TAX200912345",
    c_type: "ในประเทศ",
    c_desc: "ผู้ซื้อ 1",
    c_adr_street: "102/56 ถนน ปลากะพง",
    c_adr_street2: "ตำบล ปลากะเบน อำเภอ บางปะกง",
    c_adr_city: "ฉะเชิงเทรา",
    c_adr_state: "ไทย",
    c_adr_zip: "24000",
    c_adr_country: "ไทย",
    c_payment_term: "30% Now / 70% Balance",
    c_currency: "THB",
    c_status: 2,
  },
  {
    id: 1,
    c_code: "CUS20090002",
    c_name: "บริษัท ผู้ซื้อ 2 จำกัด",
    c_company: "บริษัท ผู้ซื้อ 2 จำกัด",
    c_phone: "038-821-002",
    c_mobile: "-",
    c_email: "cus20090002@gmail.co.th",
    c_tax_id: "TAX200912399",
    c_type: "ในประเทศ",
    c_desc: "ผู้ซื้อ 2",
    c_adr_street: "15/5 ถนน ปลากะพง",
    c_adr_street2: "ตำบล ปลากะเบน อำเภอ บางปะกง",
    c_adr_city: "ฉะเชิงเทรา",
    c_adr_state: "ไทย",
    c_adr_zip: "24000",
    c_adr_country: "ไทย",
    c_payment_term: "50% Now / 50% Balance",
    c_currency: "THB",
    c_status: 1,
  },
  {
    id: 2,
    c_code: "CUS20090003",
    c_name: "บริษัท ผู้ซื้อ 3 จำกัด",
    c_company: "บริษัท ผู้ซื้อ 3 จำกัด",
    c_phone: "038-821-335",
    c_mobile: "-",
    c_email: "cus20090003@gmail.co.th",
    c_tax_id: "TAX200912332",
    c_type: "ต่างประเทศ",
    c_desc: "ผู้ซื้อ 3",
    c_adr_street: "12/6 ถนน ปลากะพง",
    c_adr_street2: "ตำบล ปลากะเบน อำเภอ บางปะกง",
    c_adr_city: "ฉะเชิงเทรา",
    c_adr_state: "ไทย",
    c_adr_zip: "24000",
    c_adr_country: "ไทย",
    c_payment_term: "10% Now / 90% Balance",
    c_currency: "USD",
    c_status: 0,
  },
];

export const quotationColumns = [
  {
    title: "Reference",
    dataIndex: "q_code",
    key: "q_code",
    width: "10%",
    align: "center",
  },
  {
    title: "Create Date",
    dataIndex: "q_create_date",
    key: "q_create_date",
    width: "10%",
    align: "center",
  },
  {
    title: "Expire Date",
    dataIndex: "q_expire_date",
    key: "q_expire_date",
    width: "10%",
    align: "center",
  },
  {
    title: "Customer",
    dataIndex: "c_name",
    key: "c_name",
    width: "20%",
    align: "left",
  },
  {
    title: "Company",
    dataIndex: "c_company",
    key: "c_company",
    width: "20%",
    align: "left",
  },
  {
    title: "Sales",
    dataIndex: "q_sale_person",
    key: "q_sale_person",
    width: "10%",
    align: "left",
  },
  {
    title: "Total Value",
    dataIndex: "q_total",
    key: "q_total",
    width: "10%",
    align: "right",
  },

  {
    title: "Status",
    dataIndex: "q_status",
    key: "q_status",
    width: "10%",
    align: "left",
  },
];

export const saleOrderColumns = [
  {
    title: "Reference",
    dataIndex: "so_code",
    key: "so_code",
    width: "10%",
    align: "center",
  },
  {
    title: "Quotation Ref.",
    dataIndex: "q_code",
    key: "q_code",
    width: "10%",
    align: "center",
  },
  {
    title: "Order Date",
    dataIndex: "so_create_date",
    key: "so_create_date",
    width: "8%",
    align: "center",
  },
  {
    title: "Delivery Date",
    dataIndex: "so_delivery_date",
    key: "so_delivery_date",
    width: "8%",
    align: "center",
  },
  {
    title: "Customer",
    dataIndex: "c_name",
    key: "c_name",
    width: "18%",
    align: "left",
  },
  {
    title: "Company",
    dataIndex: "c_company",
    key: "c_company",
    width: "18%",
    align: "left",
  },
  {
    title: "Sales",
    dataIndex: "so_sale_person",
    key: "so_sale_person",
    width: "10%",
    align: "left",
  },
  {
    title: "Total Value",
    dataIndex: "so_total",
    key: "so_total",
    width: "10%",
    align: "right",
  },

  {
    title: "Status",
    dataIndex: "so_status",
    key: "so_status",
    width: "10%",
    align: "left",
  },
];

const getStatusName = (id) => {
  switch (id) {
    case 0:
      return "Draft";
    case 1:
      return "Confirm";
    case 2:
      return "Approve";
    case 3:
      return "Done";
    default:
      break;
  }
};

export const quotationData = [
  {
    id: 0,
    q_code: "Q2009-00001",
    q_create_date: "27/09/2020",
    q_expire_date: "27/10/2020",
    c_name: "บริษัท ผู้ซื้อ 1 จำกัด",
    c_company: "บริษัท ผู้ซื้อ 1 จำกัด",
    q_sale_person: "Sale User 1",
    c_payment_term: "30% Now / 70% Balance",
    q_total: numeral(134500.5).format("0,0.00"),
    q_status: getStatusName(0),
    q_remark: "remark 1",
    dataLine: [],
  },
  {
    id: 1,
    q_code: "Q2009-00002",
    q_create_date: "28/09/2020",
    q_expire_date: "28/10/2020",
    c_name: "บริษัท ผู้ซื้อ 229 จำกัด",
    c_company: "บริษัท ผู้ซื้อ 229 จำกัด",
    q_sale_person: "Sale User 2",
    c_payment_term: "50% Now / 50% Balance",
    q_total: numeral(245500).format("0,0.00"),
    q_status: getStatusName(1),
    q_remark: "remark 2",
    dataLine: [],
  },
  {
    id: 2,
    q_code: "Q2009-00003",
    q_create_date: "30/09/2020",
    q_expire_date: "30/10/2020",
    c_name: "บริษัท ผู้ซื้อ 3 จำกัด",
    c_company: "บริษัท ผู้ซื้อ 3 จำกัด",
    q_sale_person: "Sale User 3",
    c_payment_term: "100% Balance",
    q_total: numeral(52500.75).format("0,0.00"),
    q_status: getStatusName(3),
    q_remark: "remark 3",
    dataLine: [],
  },
  {
    id: 3,
    q_code: "Q2009-00004",
    q_create_date: "30/09/2020",
    q_expire_date: "30/10/2020",
    c_name: "บริษัท ผู้ซื้อ 55 จำกัด",
    c_company: "บริษัท ผู้ซื้อ 55 จำกัด",
    q_sale_person: "Sale User 1",
    c_payment_term: "100% Balance",
    q_total: numeral(42500.75).format("0,0.00"),
    q_status: getStatusName(2),
    q_remark: "remark 4",
    dataLine: [],
  },
];

export const saleOrderData = [
  {
    id: 0,
    so_code: "SO2009-0001",
    q_code: "Q2009-00001",
    so_create_date: "27/09/2020",
    so_delivery_date: "05/10/2020",
    c_name: "บริษัท ผู้ซื้อ 1 จำกัด",
    c_company: "บริษัท ผู้ซื้อ 1 จำกัด",
    so_sale_person: "Sale User 1",
    so_payment_term: "30% Now / 70% Balance",
    so_total: numeral(134500.5).format("0,0.00"),
    so_status: getStatusName(0),
    so_remark: "remark 1",
    dataLine: [],
  },
  {
    id: 1,
    so_code: "SO2009-0002",
    q_code: "Q2009-00002",
    so_create_date: "28/09/2020",
    so_delivery_date: "05/10/2020",
    c_name: "บริษัท ผู้ซื้อ 2 จำกัด",
    c_company: "บริษัท ผู้ซื้อ 2 จำกัด",
    so_sale_person: "Sale User 2",
    so_payment_term: "40% Now / 60% Balance",
    so_total: numeral(34500.5).format("0,0.00"),
    so_status: getStatusName(2),
    so_remark: "remark 2",
    dataLine: [],
  },
  {
    id: 2,
    so_code: "SO2009-0003",
    q_code: "Q2009-00003",
    so_create_date: "30/09/2020",
    so_delivery_date: "08/10/2020",
    c_name: "บริษัท ผู้ซื้อ 3 จำกัด",
    c_company: "บริษัท ผู้ซื้อ 3 จำกัด",
    so_sale_person: "Sale User 3",
    so_payment_term: "50% Now / 50% Balance",
    so_total: numeral(334500.5).format("0,0.00"),
    so_status: getStatusName(0),
    so_remark: "remark 3",
    dataLine: [],
  },
];

export const itemLineColumns = [
  { id: 0, name: "Item", size: 11 },
  { id: 1, name: "Quantity", size: 3 },
  { id: 2, name: "Unit", size: 3 },
  { id: 3, name: "Unit Price", size: 3 },
  { id: 4, name: "Subtotal", size: 3 },
];