<template>
  <DataTable
    :value="dishes"
    :lazy="true"
    :loading="dataStore.loading"
    :paginator="true"
    :rows="perpage"
    :rowsPerPageOptions="[2, 5, 10]"
    :totalRecords="dishes_total"
    @page="onPageChange"
    responsive-layout="scroll"
    :laading="true"
    :first="offset"
  >
    <Column field="id" header="№" />
    <Column field="name" header="Наименование" />
  </DataTable>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useDataStore } from '@/stores/dataStore'
export default {
  name: 'Dishes',
  components: { DataTable, Column },
  data() {
    return {
      dataStore: useDataStore(),
      perpage: 5,
      offset: 0,
    }
  },
  computed: {
    dishes() {
      return this.dataStore.dishes
    },
    dishes_total() {
      return this.dataStore.dishes_total
    },
  },
  mounted() {
    console.log('Dishes component mounted.');
    this.dataStore.get_dishes();
    this.dataStore.get_dishes_total();
    console.log('Dishes=', this.dishes);
  },
  methods: {
    onPageChange(event) {
      this.offset = event.first;
      this.perpage = event.rows;
      this.dataStore.get_dishes(this.offset / this.perpage, this.perpage);
    }
  }
}
</script>

<style scoped></style>