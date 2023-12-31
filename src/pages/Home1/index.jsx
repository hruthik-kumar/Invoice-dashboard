import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { getRevenueTilesInfo } from "service/api";

import { Img, List, Text } from "components";

const Home1Page = () => {
  const [getrevenuetilesinfo, setGetrevenuetilesinfo] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  const sideBarMenu = [
    { label: "Dashboard" },
    { label: "Customers" },
    { label: "Invoice" },
    { label: "Operational cost" },
    { label: "Delivery Challan" },
    { label: "Quotations" },
    { label: "Notifications" },
    { label: "Settings" },
  ];

  function callApi() {
    const req = {};

    getRevenueTilesInfo(req)
      .then((res) => {
        setGetrevenuetilesinfo(res?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="bg-gray-200 flex sm:flex-col md:flex-col flex-row font-inter gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar className="!sticky !w-[258px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-row gap-[7px] items-center justify-start ml-10 mr-[78px] mt-[30px] py-[7px] w-auto">
            <div className="bg-blue-A100 h-[60px] rounded-[50%] w-[60px]"></div>
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
              size="txtInterBold30"
            >
              Logo
            </Text>
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: "11px",
                flexDirection: "column",
                color: "#000000",
                fontWeight: 500,
                fontSize: "15px",
                [`&:hover, &.ps-active`]: { color: "#80abff" },
              },
            }}
            className="flex flex-col items-center justify-start mt-[37px] w-full"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          <div className="flex flex-row gap-2.5 items-center justify-center mb-[30px] ml-10 mr-[27px] mt-[963px] w-[191px]">
            <div className="bg-gray-500 h-[50px] rounded-[10px] w-[50px]"></div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtInterMedium15"
              >
                Hruthik Kumar
              </Text>
              <Text
                className="text-[10px] text-gray-800 w-auto"
                size="txtInterMedium10"
              >
                Free account
              </Text>
            </div>
            <Img
              className="h-4 w-[17px]"
              src="images/img_user.svg"
              alt="user"
            />
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col gap-10 items-start justify-start pr-[30px] md:px-5 py-[30px] w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
              size="txtInterBold25"
            >
              Dashboard
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-nunito gap-5 items-start justify-start w-full">
            <div className="bg-white-A700 h-[329px] rounded-[10px] w-1/2"></div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:px-5 px-[27px] py-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-center w-full">
                    <Img
                      className="h-full max-h-[53px]"
                      src="images/img_frame2271.svg"
                      alt="frame2271"
                    />
                    <div className="flex flex-1 flex-col items-center justify-center w-full">
                      <div className="flex flex-col items-start justify-start py-[5.5px] w-full">
                        <Text
                          className="text-[15px] text-black-900 w-auto"
                          size="txtNunitoBold15"
                        >
                          {getrevenuetilesinfo?.["body-json"]?.totalRevenue}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start py-[3px] w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtNunitoRegular12"
                        >
                          Total revenue
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:px-5 px-[27px] py-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-center w-full">
                    <Img
                      className="h-full max-h-[53px]"
                      src="images/img_frame2271_yellow_200.svg"
                      alt="frame2271"
                    />
                    <div className="flex flex-1 flex-col items-center justify-center w-full">
                      <div className="flex flex-col items-center justify-start py-[5.5px] w-full">
                        <Text
                          className="text-[15px] text-black-900 w-auto"
                          size="txtNunitoBold15"
                        >
                          Rs.10,00,000
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start py-[3px] w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtNunitoRegular12"
                        >
                          Monthly revenue
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:px-5 px-[27px] py-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-center w-full">
                    <Img
                      className="h-full max-h-[53px]"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <div className="flex flex-col items-center justify-start py-[5.5px] w-full">
                        <Text
                          className="text-[15px] text-black-900 w-auto"
                          size="txtNunitoBold15"
                        >
                          Rs.10,00,000
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start py-[3px] w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtNunitoRegular12"
                        >
                          Total revenue
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:px-5 px-[27px] py-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-center w-full">
                    <Img
                      className="h-full max-h-[53px]"
                      src="images/img_frame2271_green_a100.svg"
                      alt="frame2271"
                    />
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <div className="flex flex-col items-center justify-start py-[5.5px] w-full">
                        <Text
                          className="text-[15px] text-black-900 w-auto"
                          size="txtNunitoBold15"
                        >
                          15
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start py-[3px] w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtNunitoRegular12"
                        >
                          Pending invoices
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:px-5 px-[27px] py-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-center w-full">
                    <Img
                      className="h-full w-10"
                      src="images/img_close_purple_a100.svg"
                      alt="close"
                    />
                    <div className="flex flex-col h-[53px] md:h-auto items-center justify-center">
                      <div className="flex flex-col items-center justify-start py-[5.5px] w-[164px]">
                        <Text
                          className="text-[15px] text-black-900 w-auto"
                          size="txtNunitoBold15"
                        >
                          Rs.30,000
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start py-[3px] w-[164px]">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtNunitoRegular12"
                        >
                          Total revenue
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:px-5 px-[27px] py-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-center w-full">
                    <Img
                      className="h-full max-h-[53px]"
                      src="images/img_close.svg"
                      alt="close"
                    />
                    <div className="flex flex-1 flex-col h-full items-center justify-center w-full">
                      <div className="flex flex-col items-center justify-start py-[5.5px] w-full">
                        <Text
                          className="text-[15px] text-black-900 w-auto"
                          size="txtNunitoBold15"
                        >
                          Rs.10,00,000
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start py-[3px] w-full">
                        <Text
                          className="text-black-900 text-xs w-auto"
                          size="txtNunitoRegular12"
                        >
                          Total revenue
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter gap-5 items-start justify-start w-full">
            <Text
              className="text-black-900 text-xl w-auto"
              size="txtInterMedium20"
            >
              Recent invoices
            </Text>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start px-5 w-full">
              <Text
                className="flex-1 text-black-900 text-sm w-auto"
                size="txtInterRegular14"
              >
                Invoice No.
              </Text>
              <Text
                className="flex-1 text-black-900 text-sm w-auto"
                size="txtInterRegular14"
              >
                GST No.
              </Text>
              <Text
                className="flex-1 text-black-900 text-sm w-auto"
                size="txtInterRegular14"
              >
                Amount
              </Text>
              <Text
                className="flex-1 text-black-900 text-sm w-auto"
                size="txtInterRegular14"
              >
                Company name
              </Text>
              <Text
                className="flex-1 text-black-900 text-sm w-auto"
                size="txtInterRegular14"
              >
                Date
              </Text>
              <Text
                className="flex-1 text-black-900 text-sm w-auto"
                size="txtInterRegular14"
              >
                Status
              </Text>
            </div>
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <List
                className="flex flex-col gap-[15px] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 h-[70px] md:h-auto items-center justify-start my-0 px-5 rounded-[10px] w-full">
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Rs 10,000
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Olectra Greentech
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm underline w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    12 Dec, 2023
                  </Text>
                  <Text
                    className="bg-light_green-100 flex-1 justify-center pb-0.5 pt-[5px] sm:px-5 px-[35px] rounded-[12px] text-center text-green-800 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    Complete
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 h-[70px] md:h-auto items-center justify-start my-0 px-5 rounded-[10px] w-full">
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Rs 10,000
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Olectra Greentech
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm underline w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    12 Dec, 2023
                  </Text>
                  <Text
                    className="bg-light_green-100 flex-1 justify-center pb-0.5 pt-[5px] sm:px-5 px-[35px] rounded-[12px] text-center text-green-800 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    Complete
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 h-[70px] md:h-auto items-center justify-start my-0 px-5 rounded-[10px] w-full">
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Rs 10,000
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Olectra Greentech
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm underline w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    12 Dec, 2023
                  </Text>
                  <Text
                    className="bg-light_green-100 flex-1 justify-center pb-0.5 pt-[5px] sm:px-5 px-[35px] rounded-[12px] text-center text-green-800 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    Complete
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 h-[70px] md:h-auto items-center justify-start my-0 px-5 rounded-[10px] w-full">
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Rs 10,000
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Olectra Greentech
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm underline w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    12 Dec, 2023
                  </Text>
                  <Text
                    className="bg-light_green-100 flex-1 justify-center pb-0.5 pt-[5px] sm:px-5 px-[35px] rounded-[12px] text-center text-green-800 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    Complete
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 h-[70px] md:h-auto items-center justify-start my-0 px-5 rounded-[10px] w-full">
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Rs 10,000
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Olectra Greentech
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm underline w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    12 Dec, 2023
                  </Text>
                  <Text
                    className="bg-light_green-100 flex-1 justify-center pb-0.5 pt-[5px] sm:px-5 px-[35px] rounded-[12px] text-center text-green-800 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    Complete
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 h-[70px] md:h-auto items-center justify-start my-0 px-5 rounded-[10px] w-full">
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Rs 10,000
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Olectra Greentech
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm underline w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    12 Dec, 2023
                  </Text>
                  <Text
                    className="bg-light_green-100 flex-1 justify-center pb-0.5 pt-[5px] sm:px-5 px-[35px] rounded-[12px] text-center text-green-800 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    Complete
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 h-[70px] md:h-auto items-center justify-start my-0 px-5 rounded-[10px] w-full">
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Rs 10,000
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Olectra Greentech
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm underline w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    12 Dec, 2023
                  </Text>
                  <Text
                    className="bg-light_green-100 flex-1 justify-center pb-0.5 pt-[5px] sm:px-5 px-[35px] rounded-[12px] text-center text-green-800 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    Complete
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 h-[70px] md:h-auto items-center justify-start my-0 px-5 rounded-[10px] w-full">
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Rs 10,000
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Olectra Greentech
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm underline w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    12 Dec, 2023
                  </Text>
                  <Text
                    className="bg-light_green-100 flex-1 justify-center pb-0.5 pt-[5px] sm:px-5 px-[35px] rounded-[12px] text-center text-green-800 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    Complete
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 h-[70px] md:h-auto items-center justify-start my-0 px-5 rounded-[10px] w-full">
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Rs 10,000
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Olectra Greentech
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm underline w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    12 Dec, 2023
                  </Text>
                  <Text
                    className="bg-light_green-100 flex-1 justify-center pb-0.5 pt-[5px] sm:px-5 px-[35px] rounded-[12px] text-center text-green-800 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    Complete
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 h-[70px] md:h-auto items-center justify-start my-0 px-5 rounded-[10px] w-full">
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    #876364
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Rs 10,000
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    Olectra Greentech
                  </Text>
                  <Text
                    className="flex-1 text-black-900 text-sm underline w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    12 Dec, 2023
                  </Text>
                  <Text
                    className="bg-light_green-100 flex-1 justify-center pb-0.5 pt-[5px] sm:px-5 px-[35px] rounded-[12px] text-center text-green-800 text-sm w-auto"
                    size="txtInterBold14"
                  >
                    Complete
                  </Text>
                </div>
              </List>
              <Text
                className="text-[15px] text-blue-A100 text-center underline w-auto"
                size="txtInterBold15"
              >
                View all invoices
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
