<template>
	<h1 class="text-[52px] font-extrabold">
		Chance to win a StockX Mystery Box today!
	</h1>
	<p class="font-normal text-[22px]">
		Unleash the Excitement of Mystery Electronics
	</p>
	<form
		action=""
		class="rounded-[20px] border-solid border border-[#DBDBDB] p-6 mt-6"
	>
		<h2 class="text-[22px] font-medium flex justify-center align-middle">
			Enter details
		</h2>
		<div class="grid grid-cols-12 gap-y-4 my-6">
			<input
				class="border rounded-[10px] border-[#808080] px-4 py-3 col-start-1 col-span-12 sm:col-span-6 mr-4 focus:placeholder-black"
				type="text"
				placeholder="Last name"
			/>
			<input
				class="border rounded-[10px] border-[#808080] px-4 py-3 col-start-1 col-span-12 sm:col-start-7 sm:col-span-6 focus:placeholder-black"
				type="text"
				placeholder="First name"
			/>
			<input
				class="border rounded-[10px] border-[#808080] px-4 py-3 col-span-full focus:placeholder-black"
				type="text"
				placeholder="Streat"
			/>
			<input
				class="border rounded-[10px] border-[#808080] px-4 py-3 col-start-1 col-span-12 sm:col-start-1 sm:col-span-6 mr-4 focus:placeholder-black"
				type="text"
				placeholder="Postal code"
			/>
			<input
				class="border rounded-[10px] border-[#808080] px-4 py-3 col-start-1 col-span-12 sm:col-start-7 sm:col-span-6 focus:placeholder-black"
				type="text"
				placeholder="City"
			/>
			<input
				class="border rounded-[10px] border-[#808080] px-4 py-3 col-span-full focus:placeholder-black"
				type="tel"
				placeholder="Phone number"
			/>
			<input
				class="border rounded-[10px] border-[#808080] px-4 py-3 col-span-full focus:placeholder-black"
				type="email"
				placeholder="E-mail"
			/>
		</div>
		<button
			class="bg-[#006340] text-white py-3 w-full rounded-[10px] mb-6 font-semibold text-base"
			type="submit"
		>
			Proceed to payment
		</button>
        <div class="flex justify-center">
            <NuxtImg class="mr-4" src='McAfee.png'/>
            <NuxtImg class="mr-4" src='TRUSTe.png'/>
            <NuxtImg src='256BIT.png'/>
        </div>
	</form>
</template>

<script>
export default {}
</script>