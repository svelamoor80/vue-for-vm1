<template>
    <div id="mainTable">
        <div id="addPositionRibbonMenu">
            <div id="addPositionRibbonContainer">
                <div id="ribbonMenuContainerSilver" @click="toggleAddPositionTable()">
                    <span id="addPositionHeader">
                        <img v-if='toggleTable' src='/static/Collapse Down.png' />
                        <img v-else src='static/Collapse Up.png' />
                        <span id="addPositionText">Add a new position</span>
                    </span>    
                </div>
            </div>
        </div>
        <AccountWorksheetAddPositionTable v-if='toggleTable'  :updateTable='updateTable'/>
        <template v-if='tableRows.length'>
            <PositionAdjusterTable :tableRows='tableRows' :tableHeaders='tableHeader' />
        </template>
        <template v-else>
            <div>No data to display</div>
        </template>        
    </div>
</template>

<script>
import AccountWorksheetAddPositionTable from "./AccountWorksheetAddPositionTable";
import PositionAdjusterTable from "./PositionAdjusterTable";
import ClientPositionTable from "../Client";
export default {
  name: "AddPositionTableRender",
  components: { AccountWorksheetAddPositionTable, PositionAdjusterTable },
  data() {
    return {
      toggleTable: false,
      tableRows: [],
      tableHeader: {}
    };
  },
  methods: {
    toggleAddPositionTable() {
      this.toggleTable = !this.toggleTable;
    },
    updateTable(newRow) {
        let usdCash, tempTable;
        tempTable = [...this.tableRows, newRow];
        usdCash = tempTable[0];
        tempTable = tempTable.slice(1);
        tempTable.sort(function(a,b){
            let secA = a.security.toLowerCase(), secB = b.security.toLowerCase();
            if(secA < secB) {
                return -1;
            } else if(secA > secB) {
                return 1;
            } else {
                return 0;
            }
        });
        this.tableRows = [usdCash, ...tempTable];
    }
  },
  mounted() {
    ClientPositionTable.getRows(positionAdjusterTable => {
      this.tableRows = positionAdjusterTable.positionAdjusterRows;
      this.tableHeader =
        positionAdjusterTable.positionAdjusterTableColumnHeaders;
    });
  }
};
</script>

<style>
#mainTable {
  margin: 20px;
  overflow-x: auto;
  text-align: left;
}

#addPositionRibbonContainer {
  height: 40px;
}

#ribbonMenuContainerSilver {
  background: #dedede url("../assets/ribbonMenu_Background.png") -24px 0px no-repeat;
  line-height: 36px;
  vertical-align: middle;
}

#addPositionHeader {
  cursor: pointer;
  padding-left: 10px;
  vertical-align: middle;
}
</style>


