<template>
  <table id='positionAdjusterGrid'>
        <thead id='positionAdjusterTableHeader'>
            <th class='positionAdjusterTableHead' v-for="key in this.tableHeaders">
                {{key}}
            </th> 
        </thead>
        <tbody>
        <tr v-for="(row, index) in this.tableRows">
            <template v-for="(item, key) in row" v-if="key !== 'customTradeType'">
                <td v-if="key=='tradeType' && row['security'] !== 'USD Cash'">
                    <select><option v-for="col in item">{{col}}</option></select>
                </td>
                <td v-else-if="key==='tradeQty'"><input type='text' :value='item' /></td>
                <td v-else>{{item}}</td>
            </template>    
        </tr>         
        </tbody>        
  </table>    
</template>
<script>
export default {
  name: "PositionAdjusterTable",
  props: ["tableRows", "tableHeaders"],
  methods: {
        
  }
};
</script>
<style>
#positionAdjusterGrid {
  border-collapse: collapse;
}

#positionAdjusterGrid th,
#positionAdjusterGrid td {
  padding: 3px 10px;
  margin: 0px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  min-width: 70px;
}

.positionAdjusterTableHead {
  border-right: 1px solid lightgrey;
}

#positionAdjusterTableHeader {
  border-width: 0px 1px 1px 0px;
  border-color: #ccc !important;
  zoom: 1;
  background-color: #eee;
  font-weight: bold;

  color: #333 !important;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>


