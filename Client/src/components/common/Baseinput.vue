<script setup lang="ts">
defineProps({
  label: String,
  id: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  modelValue: String
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="mt-1 relative">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        class="text-gray-900 appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200 ease-in-out"
      />
    </div>
  </div>
</template>