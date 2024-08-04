<template>
	<main>
		<section class="grid grid-cols-12 gap-2 ml-7 mb-12">
			<section class="col-start-1 col-span-12 md:col-span-6 h-[95%]">
				<ImageCarousel />
				<!-- <div class="mt-[61px] h-[80%] border border-solid border-black">
					<div class="bg-[url('box1.png')] bg-cover bg-center h-[80%]"></div>
					<div class="h-[20%] flex justify-between">
						<div class="bg-[url('box1.png')] bg-cover bg-center h-full w-[25%]"></div>
						<div class="bg-[url('box1.png')] bg-cover bg-center h-full w-[25%]"></div>
						<div class="bg-[url('box1.png')] bg-cover bg-center h-full w-[25%]"></div>
					</div>
				</div> -->
			</section>
			<section
				class="col-start-1 col-span-12 md:col-start-7 md:col-span-6 pr-4"
			>
				<MysteryBoxForm />
			</section>
		</section>

		<section>
			<TopTenBoxes />
			<CuriousAbout
				title="Curious about the StockX Mystery Box?"
				first-paragraph="Experience the thrill of unboxing cutting-edge gadgets with Stockx
				Mystery Boxes. Each box is a treasure trove of high-quality electronics,
				handpicked to elevate your tech game."
				second-paragraph="Expect the unexpected! Our boxes are packed with the latest gadgets,
				from smartphones to gaming consoles, ensuring you get the best tech
				surprises every time."
				:left="true"
				img-src="stock.png"
			/>
		</section>
		<section>
			<CuriousAbout
				title="Why is everyone buzzing about these boxes?"
				first-paragraph="StockX Mystery Boxes are not just about products; they’re about the experience. Imagine the excitement of unveiling top-tier electronics at a fraction of the cost."
				second-paragraph="Our boxes include a variety of premium tech items, making it a must-have for every tech enthusiast. Join the buzz and see why everyone is raving about the unbeatable value and surprise factor of Stockx Mystery Boxes!"
				:left="false"
				img-src="buzzing.png"
			/>
		</section>

		<section>
			<Columns />
		</section>

		<section>
			<h2 class="text-center text-base mb-1">
				We accept the following credit cards
			</h2>
			<div class="flex justify-center mb-4 h-10">
				<NuxtImg
					class="w-full"
					src="cards 1.png"
				/>
			</div>
		</section>
	</main>
</template>

<script>
import ImageCarousel from '../components/ImageCarousel'
import MysteryBoxForm from '~/components/MysteryBoxForm.vue'
import TopTenBoxes from '~/components/TopTenBoxes.vue'
import CuriousAbout from '~/components/CuriousAbout.vue'
import Columns from '~/components/Columns.vue'
export default {}
</script>
