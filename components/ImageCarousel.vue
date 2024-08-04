<template>
	<div class="mt-[45px] w-full h-full">
		<NuxtImg
			class="w-full xl:w-full h-[70%] xl:h-[60%] 2xl:h-[55%] object-contain"
			:src="imgSrc"
		/>
		<div class="flex justify-between mt-4">
			<button @click="changeImageSrc('box2.png')">
				<NuxtImg
					class="w-[132px] h-[132px]"
					src="box2.png"
				/>
			</button>
			<button
				class=""
				@click="changeImageSrc('box3.png')"
			>
				<NuxtImg
					class="w-[132px] h-[132px]"
					src="box3.png"
				/>
			</button>
			<button @click="changeImageSrc('box4.png')">
				<NuxtImg
					class="w-[132px] h-[132px]"
					src="box4.png"
				/>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imgSrc = ref('box1.png')

function changeImageSrc(src: string) {
	imgSrc.value = src
}
</script>
