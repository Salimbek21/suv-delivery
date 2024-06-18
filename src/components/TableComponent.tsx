<script lang="tsx" setup>
import { defineComponent, ref, computed, onMounted } from 'vue';
import ElTableV2 from 'el-table-v2';

export default defineComponent({
  name: 'TableComponent',
  setup() {
    const columns = ref([
      // your columns definition here
    ]);
    const data = ref([
      // your data array here
    ]);
    const rowClass = ref('your-row-class');
    const defaultWidth = 1220;
    const sideCloseWidth = 1300;

    const tableWidth = computed(() => {
      return document.body.classList.contains('sideClose') ? sideCloseWidth : defaultWidth;
    });

    onMounted(() => {
      const observer = new MutationObserver(() => {
        // Trigger a re-render
        tableWidth.value = document.body.classList.contains('sideClose') ? sideCloseWidth : defaultWidth;
      });
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
      });
    });

    return () => (
      <div class="tableWrapper">
        <ElTableV2
          columns={columns.value}
          data={data.value}
          rowClass={rowClass.value}
          width={tableWidth.value}
          height={1220}
        />
      </div>
    );
  }
});
</script>
