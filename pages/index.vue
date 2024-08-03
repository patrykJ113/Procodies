<template>
	<main>
		<section class="grid grid-cols-12 gap-2 ml-7 mb-12">
			<section class="col-start-1 col-span-6">
				<ImageCarousel />
			</section>
			<section class="col-start-7 col-span-6 pr-4">
				<MysteryBoxForm />
			</section>
		</section>

		<section>
			<TopTenBoxes/>
		</section>
	</main>
</template>

<script>
import ImageCarousel from '../components/ImageCarousel'
import MysteryBoxForm from '~/components/MysteryBoxForm.vue'
import TopTenBoxes from '~/components/TopTenBoxes.vue';
export default {}
</script>
