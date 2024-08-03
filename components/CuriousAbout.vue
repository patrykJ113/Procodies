<template>
	<div class="grid grid-cols-4 gap-8 mx-[18px] mb-12">
		<NuxtImg
			v-if="left"
			class="col-start-1 col-span-2 w-full"
			:src="imgSrc"
		/>
		<div 
		class="flex flex-col justify-center"
		:class="left ? 'col-start-3 col-span-2 ' : 'col-start-1 col-span-2'"
		>
			<h2 class="text-[42px] font-bold">{{ title }}</h2>
			<p>
				{{ firstParagraph }}
			</p>
			<p>{{ secondParagraph }}</p>
		</div>
		<NuxtImg
			v-if="!left"
			class="col-start-3 col-span-2 w-full"
			:src="imgSrc"
		/>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	left: {
		type: Boolean,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	firstParagraph: {
		type: String,
		required: true,
	},
	secondParagraph: {
		type: String,
		required: false,
	},
	imgSrc: {
		type: String,
		required: false,
	},
})
</script>
