export const rawData = {
  breakTime: [
    ["12:00", "13:00"],
    ["19:00", "20:00"],
  ],
  machine: [
    {
      id: "MC001",
      title: "11509101 ห้องชั่ง RM",
    },
    {
      id: "MC002",
      title: "11502108 เครื่องผสมครีม 300 L",
    },
    {
      id: "MC003",
      title: "ห้อง Pack",
    },
  ],
  machine2: [
    { id: "11509001", machineStatus: "ready", sortNo: 1, title: "ชั่ง RM" },
    {
      id: "11502101",
      machineStatus: "ready",
      sortNo: 2,
      title: "mixer 300kg set",
    },
    {
      id: "11502205",
      machineStatus: "ready",
      sortNo: 3,
      title: "Line เป่าขวด Cream",
    },
    {
      id: "11502206",
      machineStatus: "ready",
      sortNo: 4,
      title: "Line ink jet unit carton",
    },
    {
      id: "11502201",
      machineStatus: "ready",
      sortNo: 5,
      title: "Line Fill Cream #1",
    },
    {
      id: "11502202",
      machineStatus: "ready",
      sortNo: 6,
      title: "Line Fill Cream #2",
    },
    {
      id: "11502207",
      machineStatus: "ready",
      sortNo: 7,
      title: "ขันปิดฝา semiauto",
    },
    {
      id: "11502208",
      machineStatus: "ready",
      sortNo: 8,
      title: "ขันปิดฝา semiauto",
    },
    {
      id: "11502209",
      machineStatus: "ready",
      sortNo: 9,
      title: "ขันปิดฝา manual",
    },
    {
      id: "11502210",
      machineStatus: "ready",
      sortNo: 10,
      title: "ขันปิดฝา manual",
    },
    { id: "11502211", machineStatus: "ready", sortNo: 11, title: "กดปิดฝา" },
    {
      id: "11502212",
      machineStatus: "ready",
      sortNo: 12,
      title: "ซีลปากถุงแนวตั้ง",
    },
    {
      id: "115-02-204",
      machineStatus: "ready",
      sortNo: 13,
      title: "Line Automatic Bottle Filling",
    },
    {
      id: "115-02-203",
      machineStatus: "ready",
      sortNo: 14,
      title: "Line Semi-auto Tube Filling",
    },
    { id: "115-02-301", machineStatus: "m/t", sortNo: 15, title: "Inkjet ขวด" },
    { id: "115-02-302", machineStatus: "m/t", sortNo: 16, title: "Inkjet ขวด" },
    {
      id: "115-09-003",
      machineStatus: "m/t",
      sortNo: 17,
      title: "Compressed Air",
    },
    {
      id: "115-09-004",
      machineStatus: "m/t",
      sortNo: 18,
      title: "Steam-Heat up",
    },
    {
      id: "115-09-005",
      machineStatus: "ready",
      sortNo: 19,
      title: "Hot water (clean)",
    },
    {
      id: "115-09-006",
      machineStatus: "ready",
      sortNo: 20,
      title: "Cool down",
    },
    {
      id: "115-02-303",
      machineStatus: "ready",
      sortNo: 21,
      title: "ติด Label พันรอบ #1",
    },
    {
      id: "115-02-304",
      machineStatus: "ready",
      sortNo: 22,
      title: "ติด Label พันรอบ #2",
    },
    {
      id: "115-02-305",
      machineStatus: "ready",
      sortNo: 23,
      title: "ติด label Semi-auto ด้านเดียว",
    },
    {
      id: "115-02-306",
      machineStatus: "ready",
      sortNo: 24,
      title: "ติด label Semi-auto หน้า-หลัง",
    },
    {
      id: "115-02-307",
      machineStatus: "ready",
      title: "ติด Label แบบ manual ด้านเดียว",
    },
    {
      id: "115-02-308",
      machineStatus: "ready",
      title: "ติด Label แบบ manual หน้า-หลัง",
    },
    {
      id: "115-02-309",
      machineStatus: "ready",
      title: "ติด Label พันรอบ Auto",
    },
    {
      id: "115-02-310",
      machineStatus: "ready",
      title: "พับ Unit carton+บรรจุขวด",
    },
    {
      id: "115-02-311",
      machineStatus: "ready",
      title: "ขึ้นรูป Tray+หยิบลง Tray",
    },
    { id: "115-02-312", machineStatus: "ready", title: "Shk individual+ไดร์" },
    {
      id: "115-02-313",
      machineStatus: "ready",
      title: "Shk Family Pack /Tray",
    },
    {
      id: "115-02-314",
      machineStatus: "ready",
      title: "Coding shipper+ขึ้นรูป +ลงกล่อง",
    },
    {
      id: "115-02-315",
      machineStatus: "ready",
      title: "ปิด OPP tape+ขึ้นพาเลท",
    },
  ],
  jobs: [
    {
      id: 0,
      resourceIds: ["115-09-001", "115-02-206", "11502101"],
      title: "รวมกะเช้า",
      so_no: "SO21030001",
      wo_no: "WO21030001",
      plan_start: "2021-03-01",
      plan_end: "2021-03-06",
      color: "white",
      textColor: "black",
      allDay: true,
      start: "2021-03-01",
      end: "2021-03-02",
      delivery_date: "2021-04-05",
      jobs: [
        {
          id: "j1",
          title: "SO21030001",
          so_no: "SO21030001",
          wo_no: "WO21030001",
          plan_start: "2021-03-01",
          plan_end: "2021-03-06",
          color: "orange",
          textColor: "black",
          allDay: true,
          start: "2021-03-01",
          end: "2021-03-02",
          delivery_date: "2021-04-05",
          totalHours: 1,
          dayHours: 8,
          nightHour: 4,
          status: 1,
        },
        {
          id: "j2",
          title: "SO21030002",
          so_no: "SO21030002",
          wo_no: "WO21030002",
          plan_start: "2021-03-01",
          plan_end: "2021-03-06",
          color: "orange",
          textColor: "black",
          allDay: true,
          start: "2021-03-01",
          end: "2021-03-02",
          delivery_date: "2021-04-05",
          totalHours: 1,
          status: 2,
        },
        {
          id: "j3",
          title: "SO21030003",
          so_no: "SO21030003",
          wo_no: "WO21030003",
          plan_start: "2021-03-01",
          plan_end: "2021-03-06",
          color: "orange",
          textColor: "black",
          allDay: true,
          start: "2021-03-01",
          end: "2021-03-02",
          delivery_date: "2021-04-05",
          totalHours: 2,
          status: 2,
        },
      ],
      tasks: [
        {
          id: "t2",
          resourceIds: ["MC001"],
          title: "รวมกะเช้า",
          totalHours: 4,
          timeStart: "17:30:00",
          timeEnd: "01:30:00",
          start: "2021-03-01 17:30:00",
          end: "2021-03-02 01:30:00",
        },
      ],
    },
    {
      id: 1,
      resourceIds: ["115-09-001", "115-02-206"],
      title: "รวมกะกลางคืน",
      so_no: "SO21030001",
      wo_no: "WO21030001",
      plan_start: "2021-03-01",
      plan_end: "2021-03-06",
      color: "white",
      textColor: "black",
      allDay: true,
      start: "2021-03-01",
      end: "2021-03-02",
      delivery_date: "2021-04-05",
      jobs: [
        // {
        //   id: "j1",
        //   title: "SO21030001",
        //   so_no: "SO21030001",
        //   wo_no: "WO21030001",
        //   plan_start: "2021-03-01",
        //   plan_end: "2021-03-06",
        //   color: "orange",
        //   textColor: "black",
        //   allDay: true,
        //   start: "2021-03-01",
        //   end: "2021-03-02",
        //   delivery_date: "2021-04-05",
        //   totalHours: 1,
        //   dayHours: 8,
        //   nightHour: 4,
        //   status: 1,
        // },
      ],
      dayTotalHour: 8,
      nightTotalHour: 8,
      tasks: [
        {
          id: "t2",
          resourceIds: ["MC001"],
          title: "รวมกะกลางคืน",
          totalHours: 0,
          timeStart: "17:30:00",
          timeEnd: "01:30:00",
          start: "2021-03-01 17:30:00",
          end: "2021-03-02 01:30:00",
        },
      ],
    },
  ],
  date: [
    {
      id: "j0",
      start: "2021-04-01T08:00:00",
      end: "2021-04-01T10:30:00",
      title: "2021-04-01 TEST",
      resourceIds: [["11502101", "11502102"]],
      // allDay: true,
      shift: [
        {
          id: 0,
          shift_id: 1,
          shift_title: "กะเช้า",
          title: "กะเช้า",
          mrp_routing_total_plan_time: 8,
          jobs: [
            {
              id: 0,
              title: "SO21030001",
              so_no: "SO21030001",
              wo_no: "WO21030001",
              plan_no: "P2021040001",
              mrp_routing_plan_time: 1,
              // rpm_status_id: 1,
              // rpm_status_description: "วัตถุดิบพร้อมผลิต",
              time: [{}],
            },
            {
              id: 1,
              title: "SO21030002",
              so_no: "SO21030002",
              plan_no: "P2021040002",
              mrp_routing_plan_time: 1,
              // rpm_status_id: 2,
              // rpm_status_description: "วัตถุดิบไม่พร้อมผลิต",
            },
          ],
        },
        {
          id: 1,
          shift_id: 2,
          shift_title: "กะกลางคืน",
          title: "กะกลางคืน",
          mrp_routing_total_plan_time: 8,
          jobs: [
            {
              id: 0,
              title: "SO21030001",
              so_no: "SO21030001",
              plan_no: "P2021040001",
              mrp_routing_plan_time: 4,
              // rpm_status_id: 1,
              // rpm_status_description: "วัตถุดิบพร้อมผลิต",
            },
            {
              id: 1,
              title: "SO21030002",
              so_no: "SO21030002",
              plan_no: "P2021040002",
              mrp_routing_plan_time: 4,
              // rpm_status_id: 2,
              // rpm_status_description: "วัตถุดิบไม่พร้อมผลิต",
            },
          ],
        },
      ],
    },
  ],
  mockupApiData: {
    plan: [
      {
        id: "11502101-2021-04-01",
        title: "A 2021-04-01",
        resourceId: "11502101", //เครื่อง
        shift_job_id: 1,
        sort: 0,
        start: "2021-04-01", // วัน
        groupId: "J1",
        extends: {
          isShift: false,
          isPlan: true,
        },
      },
      {
        id: "11502101-2021-04-01",
        title: "B 2021-04-01",
        sort: 3,
        resourceId: "11502101", //เครื่อง
        shift_job_id: 2,
        start: "2021-04-01", // วัน
        extends: {
          isShift: false,
          isPlan: true,
        },
      },
      {
        id: "11502101-2021-04-01",
        title: "A 2021-04-01",
        sort: 1,
        resourceId: "11502101", //เครื่อง
        shift_job_id: 1,
        start: "2021-04-01", // วัน
        // allDay: true,
        extends: {
          isShift: false,
          isPlan: true,
        },
      },
      {
        id: "A-11502212-20210404",
        resourceId: "11502101", //เครื่อง
        start: "2021-04-01",
        title: "กะเช้า",
        shift_job_id: 1,
        sort: 2,
        shift_job_name: "กะเช้า",
        sum_plan_job_plan_time: "05:00:00",
        resourceEditable: false,
        editable: false,
        color: "white",
        extends: {
          isShift: true,
          isPlan: false,
          job_detail: [
            {
              id: 0,
              title: "PLN202104002",
              plan_job_no: "PLN2021040002",
              plan_job_plan_time: "01:00:00",

              mrp_no: "MRP202103001",
              so_no: "SO202103004",
              plan_job_worker: 1,
              plan_job_actual_time: null,
            },
          ],
        },
      },
      {
        id: "B-11502212-20210404",
        resourceId: "11502101", //เครื่อง
        start: "2021-04-01",
        allDay: true,
        title: "กะกลางคืน",
        shift_job_id: 2,
        sort: 4,
        shift_job_name: "กะกลางคืน",
        sum_plan_job_plan_time: "00:00:00",
        resourceEditable: false,
        editable: false,
        color: "white",
        extends: {
          isShift: true,
          isPlan: false,
          job_detail: [
            {
              id: 0,
              title: "PLN202104002",
              plan_job_no: "PLN2021040002",
              plan_job_plan_time: "01:00:00",

              mrp_no: "MRP202103001",
              so_no: "SO202103004",
              plan_job_worker: 1,
              plan_job_actual_time: null,
            },
          ],
        },
      },
    ],
  },
};
