<template>
  <DataTable
    :value="categories"
    :lazy="true"
    :loading="dataStore.loading"
    :paginator="true"
    :rows="perpage"
    :rowsPerPageOptions="[2, 5, 10]"
    :totalRecords="categories_total"
    @page="onPageChange"
    responsive-layout="scroll"
    :laading="true"
    :first="offset"
  >
    <Column field="id" header="№" />
    <Column field="name" header="Наименование" />
    <Column header="Фото">
      <template #body="slotProps">
        <img
          :src="slotProps.data.photo_path"
          alt="Фото категории"
          width="100"
          height="100"
          style="object-fit: cover; border-radius: 8px;"
        />
      </template>
    </Column>
    <template #footer v-if="authStore.isAuthenticated">
      <div class="text-end">
        <Button type="button" @click="this.$router.push('/createCategory')" icon="pi pi-plus" label="Добавить категорию" />
      </div>
    </template>
  </DataTable>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useDataStore } from '@/stores/dataStore'
import Button from 'primevue/button'
import { useAuthStore } from '@/stores/authStore.js'
export default {
  name: 'Categories',
  components: { DataTable, Column, Button },
  data() {
    return {
      dataStore: useDataStore(),
      authStore: useAuthStore(),
      perpage: 5,
      offset: 0,
    }
  },
  computed: {
    categories() {
      return this.dataStore.categories
    },
    categories_total() {
      return this.dataStore.categories_total
    },
  },
  mounted() {
    console.log('Categories component mounted.');
    this.dataStore.get_categories();
    this.dataStore.get_categories_total();
    console.log('Categories=', this.categories);
  },
  methods: {
    useAuthStore,
    onPageChange(event) {
      this.offset = event.first;
      this.perpage = event.rows;
      this.dataStore.get_categories(this.offset / this.perpage, this.perpage);
    }
  }
}
</script>

<style scoped></style>