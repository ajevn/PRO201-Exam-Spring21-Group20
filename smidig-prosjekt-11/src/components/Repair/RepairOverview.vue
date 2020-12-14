<template>
    <div id="overview-container">
        <label class="font-standardText">Продукт</label
        ><!-- Product -->
        <label class="font-standardText">Серийный номер</label>
        <!-- Serial Number -->
        <label class="font-standardText">Запчасти</label>
        <!-- Parts -->
        <div id="edit-delete-label">
            <label class="font-standardText">редактировать</label>
            <!-- Edit -->
            <label class="font-standardText">редактировать</label>
            <!-- Delete -->
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#overview-container {
    background-color: #7eb46b;
    height: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 40% 1fr 20px;
    align-items: center;

    label {
        color: #273422;
        font-weight: bold;
        text-align: center;
        display: inline-block;
    }

    #edit-delete-label {
        grid-column: 4;
        display: inline-block;
        text-align: center;

        label {
            margin-left: 30px;
        }
    }
}
</style>
