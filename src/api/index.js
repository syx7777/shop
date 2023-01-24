import requests from "./mockAjax";

export const reqGetItemList = ()=>requests.get('/item');