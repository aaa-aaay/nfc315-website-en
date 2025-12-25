<template>
  <select class="awe-select bs-select-hidden" name="children" v-model="selectedValue">
    <!-- 原生select的placeholder选项（禁用且默认选中） -->
    <option
      value=""
      disabled
      :selected="!selectedValue"
    >
      {{ placeholder }}
    </option>
    <!-- 原有选项 -->
    <option v-for="(option, index) in options" :key="index" :value="option.value || option">
      {{ option.label || option }}
    </option>
  </select>
  <div
    class="btn-group bootstrap-select awe-select" :style="style"
    :class="{ open: isOpen }"
    ref="selectContainer"
  >
    <button
      type="button"
      class="btn dropdown-toggle btn-default"
      data-toggle="dropdown"
      :title="displayValue"
      aria-expanded="isOpen"
      @click.stop="toggleOpen"
    >
      <!-- 显示选中值或placeholder -->
      <span class="filter-option pull-left">{{ displayValue }}</span>&nbsp;
      <span class="caret"></span>
    </button>
    <div
      class="dropdown-menu"
      :class="{ open: isOpen }"
      style="max-height: 301px; overflow: hidden; min-height: 114px;"
    >
      <ul class="dropdown-menu inner" role="menu" style="max-height: 301px; overflow-y: auto; min-height: 114px;">
        <li
          v-for="(option, index) in options"
          :key="index"
          :data-original-index="index"
          :class="{ selected: selectedValue === (option.value || option) }"
          @click.stop="handleSelect(option)"
        >
          <a tabindex="0" class="" style="" data-tokens="null">
            <span class="text">{{ option.label || option }}</span>
            <span class="glyphicon glyphicon-ok check-mark"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineEmits, defineProps, computed, watch } from 'vue';

// 1. 定义接收父组件的props（新增placeholder属性）
const props = defineProps({
  style:{
    type: Object,
    default: {}
  },
  options: {
    type: Array,
    default: () => ['Children', '1', '2', '3']
  },
  // 新增：placeholder属性，默认值"请选择"
  placeholder: {
    type: String,
    default: "请选择"
  },
  // 支持v-model传入初始值（默认设为空，方便显示placeholder）
  modelValue: {
    type: [String, Number, null],
    default: '' // 初始为空，未选择任何值
  }
});

// 2. 定义自定义事件
const emit = defineEmits(['change', 'update:modelValue']);

// 选中的值（关联v-model）
const selectedValue = ref(props.modelValue);
// 控制下拉菜单显示状态
const isOpen = ref(false);
// 组件容器引用
const selectContainer = ref(null);

// 3. 调整显示文本逻辑：未选中时显示placeholder，选中后显示选中值
const displayValue = computed(() => {
  // 如果未选中任何值（selectedValue为空），显示placeholder
  if (!selectedValue.value) {
    return props.placeholder;
  }
  // 否则查找选中的选项文本
  const currentOption = props.options.find(option =>
    (option.value || option) === selectedValue.value
  );
  return currentOption ? (currentOption.label || currentOption) : props.placeholder;
});

// 切换下拉菜单状态
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

// 处理选项选择
const handleSelect = (option) => {
  const value = option.value || option;
  selectedValue.value = value;
  isOpen.value = false;
  // 向父组件传递值
  emit('change', value);
  emit('update:modelValue', value);
};

// 监听props变化（父组件修改modelValue时同步更新）
watch(() => props.modelValue, (newVal) => {
  selectedValue.value = newVal;
});

// 点击外部区域关闭下拉
const handleClickOutside = (event) => {
  if (selectContainer.value && !selectContainer.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* 可以给placeholder添加特殊样式（如灰色） */
.filter-option:empty,
.filter-option:contains("请选择") { /* 这里的"请选择"需与默认placeholder一致，或通过class控制 */
  color: #f3e949; /* 占位文本灰色 */
}
</style>