<template> 

 <!-- *Chat message BOX -->
 <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">

         <chatBubble 
         v-for="message in messages"
         :key="message.id" 
         v-bind="message"
         />
         <!-- :its-mine="message.itsMine"
         :message="message.message"
         :image="message.image" -->
         


        </div>
      </div>
      <!-- *Chat message box -->

</template>

<script setup lang="ts">  
  import chatBubble from '@/components/chat/chatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
  interface Props {
    messages: ChatMessage[];
  }


  defineProps<Props>();
</script>