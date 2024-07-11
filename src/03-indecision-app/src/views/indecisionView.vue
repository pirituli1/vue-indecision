<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
      <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
        <span>Solecito</span>
      </div>

     <!-- Chat messages -->
      <chatMessage :messages="messages"/>

      <messageBox/>
      
      
    </div>
  </template>

<script setup lang="ts">
  import chatMessage from '@/components/chat/chatMessage.vue';
  import messageBox from '@/components/chat/messageBox.vue';
import type{ ChatMessage } from '@/interfaces/chat-message.interface';
  import { ref } from 'vue';

  const messages = ref<ChatMessage[]>([
    {
    id: new Date().getTime(),
    message: "Quieres ir a tomar café?",
    itsMine: true
    },
    {
    id: new Date().getTime()+1,
    message: "Yes",
    itsMine: false,
    image: "https://yesno.wtf/assets/yes/9-6403270cf95723ae4664274db51f1fd4.gif",
    },
    {
    id: new Date().getTime()+1,
    message: "Que bueno, yo también quiero",
    itsMine: true,
    image: "https://yesno.wtf/assets/yes/9-6403270cf95723ae4664274db51f1fd4.gif",
    },
]);



</script>