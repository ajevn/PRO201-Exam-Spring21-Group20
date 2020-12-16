<template>
    <teleport to="body">
        <transition name="modal-fade">
            <div class="modal-backdrop z-50">
                <div
                    class="rounded-lg modal"
                    role="dialog"
                    aria-labelledby="modalTitle"
                    aria-describedby="modalDescription"
                >
                    <header class="modal-header" id="modalTitle">
                        <img src="@/assets/Images/alert.png" id="header-image" />
                        <slot class="slot-text font-standardText" name="header" />
                    </header>
                    <section class="modal-body" id="modalDescription">
                        <slot class="slot-text font-standardText" name="body" />
                    </section>
                    <footer class="modal-footer">
                        <slot class="slot-text font-standardText" name="footer" />
                        <button
                            type="button"
                            class="btn-green font-standardText"
                            @click="close"
                            aria-label="Close modal"
                        >
                            Okay
                        </button>
                    </footer>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script>
export default {
    name: 'modal',
    emits: ['close'],
    methods: {
        close() {
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
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
    background: #f8f6f2;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header {
    padding: 15px;
    display: flex;
    margin: auto;
}
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    color: #f27474;
    justify-content: space-between;
    font-size: 2em;
}

.modal-body {
    position: relative;
    padding: 15px 15px;
    font-size: 1.5em;
}

.slot-text {
    background-color: black;
    font-size: 30px;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
}

.btn-green {
    color: white;
    margin: auto;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
    width: 40%;
    height: 40px;
}

.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}
</style>
