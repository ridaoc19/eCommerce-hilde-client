export interface SvgProps {
	type: SvgType;
	width?: number;
	height?: number;
	color?: string;
}

export enum SvgType {
	User = 'user', // 👤
	Name = 'name', // 📝
	LastName = 'lastName', // 📝
	Delete = 'delete', // 🗑️
	Filter = 'filter', // 🔍
	Increase = 'increase', // ➕
	Decrement = 'decrement', // ➖
	Close = 'close', // ❌
	Shop = 'shop', // 🛒
	Search = 'search', // 🔎
	OpenEye = 'openEye', // 👁️
	ClosedEye = 'closedEye', // 👁️‍🗨️
	Notifications = 'notifications', // 🔔
	Logo = 'logo', // 🏷️
	LogoTitle = 'logo-title', // 🏷️📛
	Password = 'password', // 🔒
	Email = 'email', // 📧
	NewEmail = 'newEmail', // ✉️
	ArrowLeft = 'arrowLeft', // ⬅️
	ArrowRight = 'arrowRight', // ➡️
	ArrowTop = 'arrowTop', // ⬆️
	ArrowBottom = 'arrowBottom', // ⬇️
	Update = 'update', // 🔄
	Success = 'success', // ✅
	Spinner = 'spinner', // 🔄
	Home = 'home', // 🏠
	Phone = 'phone', // 📞
	Facebook = 'facebook', // 📘
	Twitter = 'twitter', // 🐦
	LinkedIn = 'linkedIn', // 🔗
	Instagram = 'instagram', // 📸
	Snapchat = 'snapchat', // 👻
	Messenger = 'messenger', // 💬
	PhoneSocial = 'phone-social', // 📱
	Whatsapp = 'whatsapp', // 🟢
	Location = 'location', // 📍
	Time = 'time', // 🕒
	Redirect = 'redirect', // 🔄
	Edit = 'edit', // ✏️
	Tablet = 'tablet', // 📱
	Desktop = 'desktop', // 🖥️
	Text = 'text', // 📝
	Mobile = 'mobile', // 📱
	Check = 'check', // ✅
	Uncheck = 'uncheck', // ❌
	Spanish = 'Spanish',
	English = 'English',
}
