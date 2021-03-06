import {
  GET_ALL_ITEMS,
  GET_RECEIVE_LIST,
  GET_RECEIVE_SUB_DETAIL,
  GET_RECEIVE_DETAIL,
  GET_RECEIVE_HEAD,
  GET_PO_RECEIVE_LIST,
  RESET_RECEIVE,
  GET_MASTER_DATA_ITEM,
  GET_ISSUE_LIST,
  RESET_ISSUE,
  GET_ISSUE_BY_ID,
  GET_ALL_SHELF,
  GET_ISSUE_REF_LIST,
  GET_DISBURSE_LIST,
  GET_DISBURSE_BY_ID,
  GET_LOCATION_SHELF_BY_ITEM_ID,
  GET_LOT_BATCH_BY_ITEM_ID_SHELF,
  GET_REPORT_STOCK,
  GET_ITEM_BY_ID,
  GET_RECEIVE_BY_ID,
  GET_ITEM_TYPE,
  GET_ITEM_TYPE_IN_ROW,
  GET_ITEM_CATEGORY,
  GET_CATEGORY_IN_ROW,
  GET_TYPE_UOM,
  GET_TYPE_UOM_IN_ROW,
  GET_UOM,
  GET_UOM_IN_ROW,
  GET_ITEM_TYPE_BY_ID,
  GET_ITEM_CATEGORY_BY_ID,
  GET_UOM_BY_ID,
} from "../actions/types";
const initialState = {
  item: {
    data_head: {},
    data_detail: [],
    data_part: [],
    data_part_detail: [],
    data_part_mix: [],
    data_formula: [],
    data_qa_detail: [],
    data_weight_detail: [],
    data_packaging_detail: [],
    data_file: [],
  },
  master_data: {
    item_uom: [],
    item_type: [],
    item_benefit: [],
    item_control: [],
    item_category: [],
    item_list: [],
    shelf: [],
    item_part: [],
  },
  configurations: {
    type: [],
    typeInRow: [],
    category: [],
    categoryInRow: [],
    typeUom: [],
    typeUomInRow: [],
    uom: [],
    uomInRow: [],
  },
  stock: {
    item_location_shelf: [],
    item_lot_batch: [],
  },
  receive: {
    po_ref: [],
    receive_list: [],
    receive_head: {},
    receive_detail: [],
    receive_sub_detail: [],
  },
  issue: {
    issue_list: [],
    issue_head: {},
    issue_detail: [],
  },
  disburse: {
    issue_ref: [],
    disburse_list: [],
    disburse_head: {},
    disburse_detail: [],
    disburse_sub_detail: [],
  },
  report: {
    stock_on_hand: [],
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MASTER_DATA_ITEM:
      return {
        ...state,
        master_data: action.payload,
      };
    case GET_ALL_ITEMS:
      return {
        ...state,
        master_data: { ...state.master_data, item_list: action.payload },
      };
    case GET_ITEM_BY_ID:
      return {
        ...state,
        item: action.payload,
      };
    case GET_LOCATION_SHELF_BY_ITEM_ID:
      return {
        ...state,
        stock: { ...state.stock, item_location_shelf: action.payload },
      };
    case GET_LOT_BATCH_BY_ITEM_ID_SHELF:
      return {
        ...state,
        stock: { ...state.stock, item_lot_batch: action.payload },
      };
    // CONFIGURATIONS TYPE
    case GET_ITEM_TYPE:
      return {
        ...state,
        configurations: { ...state.configurations, type: action.payload },
      };
    case GET_ITEM_TYPE_IN_ROW:
      return {
        ...state,
        configurations: {
          ...state.configurations,
          typeInRow: action.payload,
        },
      };
    case GET_ITEM_TYPE_BY_ID:
      return {
        ...state,
        configurations: {
          ...state.configurations,
          typeInRow: action.payload,
        },
      };
    case GET_ITEM_CATEGORY:
      return {
        ...state,
        configurations: { ...state.configurations, category: action.payload },
      };
    case GET_CATEGORY_IN_ROW:
      return {
        ...state,
        configurations: {
          ...state.configurations,
          categoryInRow: action.payload,
        },
      };
    case GET_ITEM_CATEGORY_BY_ID:
      return {
        ...state,
        configurations: {
          ...state.configurations,
          categoryInRow: action.payload,
        },
      };
    case GET_TYPE_UOM:
      return {
        ...state,
        configurations: {
          ...state.configurations,
          typeUom: action.payload,
        },
      };
    case GET_TYPE_UOM_IN_ROW:
      return {
        ...state,
        configurations: {
          ...state.configurations,
          typeUomInRow: action.payload,
        },
      };
    case GET_UOM:
      return {
        ...state,
        configurations: {
          ...state.configurations,
          uom: action.payload,
        },
      };
    case GET_UOM_IN_ROW:
      return {
        ...state,
        configurations: {
          ...state.configurations,
          uomInRow: action.payload,
        },
      };
    case GET_UOM_BY_ID:
      return {
        ...state,
        configurations: {
          ...state.configurations,
          uomInRow: action.payload,
        },
      };
    // RECEIVE
    case GET_RECEIVE_LIST:
      return {
        ...state,
        receive: { ...state.receive, receive_list: action.payload },
      };
    case GET_PO_RECEIVE_LIST:
      return {
        ...state,
        receive: { ...state.receive, po_ref: action.payload },
      };
    case GET_RECEIVE_BY_ID:
      return {
        ...state,
        receive: { ...state.receive, ...action.payload },
      };
    case GET_RECEIVE_HEAD:
      return {
        ...state,
        receive: { ...state.receive, receive_head: action.payload },
      };
    case GET_RECEIVE_DETAIL:
      return {
        ...state,
        receive: { ...state.receive, receive_detail: action.payload },
      };
    case GET_RECEIVE_SUB_DETAIL:
      return {
        ...state,
        receive: { ...state.receive, receive_sub_detail: action.payload },
      };
    case RESET_RECEIVE:
      return {
        ...state,
        receive: initialState.receive,
      };
    case GET_ALL_SHELF:
      return {
        ...state,
        master_data: { ...state.master_data, shelf: action.payload },
      };
    case GET_ISSUE_BY_ID:
      return {
        ...state,
        issue: { ...state.issue, ...action.payload },
      };
    case GET_ISSUE_LIST:
      return {
        ...state,
        issue: { issue_list: action.payload },
      };
    case RESET_ISSUE:
      return {
        ...state,
        issue: initialState.issue,
      };

    // DISBURSE
    case GET_DISBURSE_LIST:
      return {
        ...state,
        disburse: { ...state.disburse, disburse_list: action.payload },
      };
    case GET_ISSUE_REF_LIST:
      return {
        ...state,
        disburse: { ...state.disburse, issue_ref: action.payload },
      };
    case GET_DISBURSE_BY_ID:
      return {
        ...state,
        disburse: { ...state.disburse, ...action.payload },
      };

    //REPORT
    case GET_REPORT_STOCK:
      return {
        ...state,
        report: { ...state.report, stock_on_hand: action.payload },
      };
    default:
      return state;
  }
};
