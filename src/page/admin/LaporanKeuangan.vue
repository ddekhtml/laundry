<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

function toAdminDashboard() {
    router.push('/admin'); 
}
function rupiah(number) {
    return 'Rp' + new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 0
    }).format(number);
}

const periodeAktif = ref('1minggu');
const labelTotal = computed(() => {
    return periodeAktif.value === '1minggu' ? 'Total Minggu Ini' : 'Total Bulan Ini';
});
const totalTampilan = computed(() => {
    return periodeAktif.value === '1minggu' ? 1050000 : 4250000;
});
const grupTransaksi = ref([
    {
        namaGrup: 'Hari Ini',
        totalGrup: 60000,
        list: [
            { id: '76561', total_harga: 15000, tanggal: '29 Juni 2026' },
            { id: '77180', total_harga: 25000, tanggal: '29 Juni 2026' },
            { id: '81583', total_harga: 20000, tanggal: 'Tanggal' },
        ]
    },
    {
        namaGrup: '28 Juni',
        totalGrup: 20000,
        list: [
            { id: '61585', total_harga: 10000, tanggal: '28 Juni 2026' }
        ]
    }
]);
</script>

<template>
    <div class="min-h-screen bg-[#f8f9fa] p-6 font-sans">
        <div class="text-gray-400 text-sm mb-4 ml-4">Laporan Keuangan</div>

        <div class="bg-white rounded-xl shadow-sm min-h-[85vh] p-8 max-w-6xl mx-auto border border-gray-100">
            
            <div class="flex justify-between items-center border-b border-gray-200 pb-5 mb-8">
                <h1 class="text-3xl font-bold text-[#0066cc]">Cucian.</h1>
                <button 
                    @click="toAdminDashboard" 
                    class="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-1.5 text-gray-700 hover:bg-gray-50 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span class="text-sm font-medium">Admin</span>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
                
                <div class="md:col-span-5 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center gap-6 mb-6">
                            <span class="text-gray-700 font-medium">Periode:</span>
                            <span 
                                @click="periodeAktif = '1minggu'" 
                                :class="periodeAktif === '1minggu' ? 'text-[#0066cc] font-semibold border-b-2 border-[#0066cc]' : 'text-gray-400 cursor-pointer'"
                                class="pb-1 text-base transition"
                            >
                                1 Minggu
                            </span>
                            <span 
                                @click="periodeAktif = '6bulan'" 
                                :class="periodeAktif === '6bulan' ? 'text-[#0066cc] font-semibold border-b-2 border-[#0066cc]' : 'text-gray-400 cursor-pointer'"
                                class="pb-1 text-base transition"
                            >
                                6 Bulan
                            </span>
                        </div>

                        <div class="w-full flex gap-2 select-none h-56 mt-4">
                            <div class="flex flex-col justify-between text-[11px] text-gray-400 font-medium text-right w-10 pb-6 pr-1">
                                <span>{{ periodeAktif === '1minggu' ? '250k' : '5jt' }}</span>
                                <span>{{ periodeAktif === '1minggu' ? '200k' : '4jt' }}</span>
                                <span>{{ periodeAktif === '1minggu' ? '150k' : '3jt' }}</span>
                                <span>{{ periodeAktif === '1minggu' ? '100k' : '2jt' }}</span>
                                <span>{{ periodeAktif === '1minggu' ? '50k' : '1jt' }}</span>
                                <span class="text-gray-500">0</span>
                            </div>

                            <div class="flex-1 flex flex-col justify-between relative h-full">
                                <div class="absolute inset-0 flex flex-col justify-between pb-6 pointer-events-none">
                                    <div class="w-full border-b border-gray-100"></div>
                                    <div class="w-full border-b border-gray-100"></div>
                                    <div class="w-full border-b border-gray-100"></div>
                                    <div class="w-full border-b border-gray-100"></div>
                                    <div class="w-full border-b border-gray-100"></div>
                                    <div class="w-full border-b border-gray-300"></div>
                                </div>

                                <div class="absolute inset-0 pb-6">
                                    
                                    <svg v-if="periodeAktif === '1minggu'" class="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                                        <path 
                                            d="M 15 140 L 93 90 L 172 120 L 250 95 L 328 45 L 407 100 L 485 25" 
                                            fill="none" 
                                            stroke="#0066cc" 
                                            stroke-width="3.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <circle cx="15" cy="140" r="4" fill="#0066cc" />
                                        <circle cx="93" cy="90" r="4" fill="#0066cc" />
                                        <circle cx="172" cy="120" r="4" fill="#0066cc" />
                                        <circle cx="250" cy="95" r="4" fill="#0066cc" />
                                        <circle cx="328" cy="45" r="4" fill="#0066cc" />
                                        <circle cx="407" cy="100" r="4" fill="#0066cc" />
                                        <circle cx="485" cy="25" r="4" fill="#0066cc" />
                                    </svg>

                                    <svg v-else class="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                                        <path 
                                            d="M 15 140 L 109 90 L 203 120 L 297 95 L 391 30 L 485 15" 
                                            fill="none" 
                                            stroke="#0066cc" 
                                            stroke-width="3.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <circle cx="15" cy="140" r="4" fill="#0066cc" />
                                        <circle cx="109" cy="90" r="4" fill="#0066cc" />
                                        <circle cx="203" cy="120" r="4" fill="#0066cc" />
                                        <circle cx="297" cy="95" r="4" fill="#0066cc" />
                                        <circle cx="391" cy="30" r="4" fill="#0066cc" />
                                        <circle cx="485" cy="15" r="4" fill="#0066cc" />
                                    </svg>

                                </div>

                                <div class="absolute bottom-0 inset-x-0 flex justify-between text-[11px] text-gray-400 font-medium px-2">
                                    <template v-if="periodeAktif === '1minggu'">
                                        <span>Senin</span><span>Selasa</span><span>Rabu</span><span>Kamis</span><span>Jumat</span><span>Sabtu</span><span>Minggu</span>
                                    </template>
                                    <template v-else>
                                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span>
                                    </template>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="mt-8">
                        <p class="text-gray-800 font-medium text-base mb-1">{{ labelTotal }}</p>
                        <h1 class="text-4xl font-bold text-[#0066cc] tracking-wide">
                            {{ rupiah(totalTampilan) }}
                        </h1>
                    </div>
                </div>

                <div class="md:col-span-7 border border-gray-400 rounded-sm overflow-hidden h-fit">
                    
                    <div v-for="(grup, gIdx) in grupTransaksi" :key="gIdx">
                        <div class="flex justify-between items-center bg-[#f1f5f9] px-4 py-2 border-b border-gray-400 font-medium">
                            <span class="text-gray-800 text-sm">{{ grup.namaGrup }}</span>
                            <span class="text-[#0066cc] text-sm font-semibold">{{ rupiah(grup.totalGrup) }}</span>
                        </div>

                        <div 
                            v-for="(item, iIdx) in grup.list" 
                            :key="item.id" 
                            class="flex justify-between items-center px-4 py-4 border-b border-gray-400 bg-white"
                        >
                            <div class="flex items-center gap-4">
                                <div class="text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-base font-bold text-gray-900">{{ rupiah(item.total_harga) }}</h3>
                                    <p class="text-xs text-gray-400">{{ item.tanggal }}</p>
                                </div>
                            </div>

                            <div class="text-right flex flex-col justify-between h-full">
                                <p class="text-xs text-gray-400 mb-2">Id: {{ item.id }}</p>
                                <a 
                                    href="#" 
                                    @click.prevent="alert('Mencetak nota #' + item.id)"
                                    class="text-xs text-[#0066cc] underline hover:text-blue-800 transition"
                                >
                                    Cetak Nota
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
