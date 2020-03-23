<script>
  import ContactForm from './ContactForm.vue'
  export default {
		  components: {
   ContactForm,
  },
		name: 'Modal',
		ContactForm,
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<template>
<div>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal w-8/12 h-auto"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
			
          <slot name="header">
            <button
              type="button"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-600 text-3xl focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              @click="close"
              aria-label="Close modal"
            > 
             X
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
    <ContactForm />
        </section>
        <footer class="modal-footer">
        
 <button
              type="button"
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-600 text-3xl focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              @click="close"
              aria-label="Close modal"
            > 
             X
            </button>

        </footer>
      </div>
    </div>
  </transition>
</div>
</template>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    /* overflow-x: auto; */
    /* display: flex;
    flex-direction: column; */
  }

  .modal-header,
  .modal-footer {

    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
 
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>