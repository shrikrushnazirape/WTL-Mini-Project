import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import *as IconName  from "react-icons/ai";
import *as GoIcon  from "react-icons/go";
import *as MdIcon  from "react-icons/md";
export const SidebarData = [
{
	title: "Home",
	path: "/",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	// subNav: [
	// {
	// 	title: "Our Aim",
	// 	path: "/about-us/aim",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	// {
	// 	title: "Our Vision",
	// 	path: "/about-us/vision",
	// 	icon: <IoIcons.IoIosPaper />,
	// },
	
	// ],
},
{
	title: "Inventry Managemet",
	path: "/",
	icon: <IconName.AiOutlineDatabase />,
},
{
	title: "Order Manegment",
	path: "/order/",
	icon: <FaIcons.FaBeer />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Order Dashboard",
		path: "/order/",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Items",
		path: "/item/",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	
	],
},
{
	title: "Employee Managemet",
	path: "/get_Emp",
	icon: <IconName.AiOutlineUser />,
},
{
		title: 'Supplier Managemet',
		path: '/supplier',
		icon: <MdIcon.MdLocalShipping />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: 'Supplier Orders',
				path: '/supplier-orders',
				icon: <IoIcons.IoIosPaper />,
				cName: 'sub-nav'
			}
		]
},
{
	title: "Contact",
	path: "/support",
	icon: <IoIcons.IoMdHelpCircle />,
},
{
	title: "About Us",
	path: "/support",
	icon: <IoIcons.IoMdHelpCircle />,
},
];
