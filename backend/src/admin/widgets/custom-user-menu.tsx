import { defineWidget } from "@medusajs/admin-ui"
import {
	SignOutIcon,
	ProfileIcon,
	HelpCircleIcon,
	ShortcutIcon,
} from "@medusajs/ui"
import React from "react"

const CustomUserMenu = () => {
	return (
		<div className="flex flex-col space-y-2">
			{/* Profile Settings */}
			<a
				href="/app/settings/profile"
				className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
			>
				<ProfileIcon className="w-5 h-5" />
				<span>Profile settings</span>
			</a>

			{/* Shortcuts */}
			<a
				href="/shortcuts"
				className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
			>
				<ShortcutIcon className="w-5 h-5" />
				<span>Shortcuts</span>
			</a>

			{/* Theme Selection */}
			<div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
				<HelpCircleIcon className="w-5 h-5" />
				<span>Theme</span>
			</div>

			{/* Logout */}
			<a
				href="/logout"
				className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
			>
				<SignOutIcon className="w-5 h-5" />
				<span>Log out</span>
			</a>
		</div>
	)
}

export const config = defineWidget({
	id: "custom-user-menu",
	component: CustomUserMenu,
	options: {
		zone: "menu.user",
	},
})
