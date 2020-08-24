/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: "development" | "production" | "test"
	}
}

declare module "*.bmp" {
	const src: string
	export default src
}

declare module "*.gif" {
	const src: string
	export default src
}

declare module "*.jpg" {
	const src: string
	export default src
}

declare module "*.jpeg" {
	const src: string
	export default src
}

declare module "*.webp" {
	const src: string
	export default src
}
