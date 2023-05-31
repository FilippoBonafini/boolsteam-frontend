import { reactive } from "vue";
export const store = reactive({
    api_url:'http://127.0.0.1:8000/api/games',
    img_prefix:'http://127.0.0.1:8000/storage/' ,
    games:[],
});