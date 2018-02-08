<template>
    <div id="addPositionTableContainer">
        <table id="addPositionTable">
            <thead>
                <tr>
                    <th class="addPositionTable_Head">Type</th>
                    <th class="addPositionTable_Head" id="secOptionsHeader">Security/CUSIP</th>
                    <th class="addPositionTable_Head">Description</th>
                    <th class="addPositionTable_Head">Trade Type</th>
                    <th class="addPositionTable_Head">Trade Amount(Optional)</th>
                    <th class="addPositionTable_Head">Trade Quantity(Optional)</th>    
                </tr>    
            </thead>
            <tbody>
                <tr id="addPositionTable_mainBody">
                    <td class='addPositionTable_mainCell addPositionTable_width1'>
                        <select id='typeSelector' class='addPositionTable_Dropdown' ref="typeChange">
                            <option>Security</option>
                            <option>Options</option>
                        </select>
                    </td>
                    <td class='addPositionTable_mainCell addPositionTable_width2'>
                        <input type="text" id='securityInputText' class='addPositionTable_InputField' ref="security"/>
                    </td>
                    <td class='addPositionTable_mainCell addPositionTable_width2'>
                        <input type="text" ref="description" id="descriptionText" class="addPositionTable_InputField" readOnly />
                    </td>
                    <td class='addPositionTable_mainCell addPositionTable_width1'>
                        <select id="tradeTypeSelector" class="addPositionTable_Dropdown" ref="tradeType">
                            <option>Buy Long</option>
                            <option>Sell Short</option>
                        </select>
                    </td>
                    <td class='addPositionTable_mainCell addPositionTable_width1'>
						<input type="text" id="tradeAmnt" ref="tradeAmnt" class='addPositionTable_InputField' disabled/>
					</td>
					<td class='addPositionTable_mainCell addPositionTable_width1'>
						<input type="text" id="tradeQty" class='addPositionTable_InputField' ref="tradeQty"/>
					</td>
                </tr>    
                <tr>
				    <td colspan='8'>
						<input id="addPositionButton" type="button" value="Add" @click='addNewPosition()'/>
					</td>
				</tr>                                
            </tbody>
        </table>    
    </div>    
</template>
<script>
export default {
  props: ['updateTable'],  
  data() {
    return {
      newRow: {},        
    };
  },
  methods: {
    addNewPosition() {
        let tempRow = {
            security: this.$refs.security.value,
            positionType: this.$refs.tradeType.value === "Buy Long" ? "Long" : "Short",
            currentQty: "0.000",
            customTradeType: this.$refs.tradeType.value,        
            tradeType: ["Buy Long", "Sell Short"],
            tradeQty: this.$refs.tradeQty.value,
            tradeAmount: this.$refs.tradeAmnt.value,
            expectedQty: "0.0000",
            expectedAmt: "0.00",
            expectedPercent: "0.000",
            customPercent: "0.000",
            driftPercent: "0.000",
            relativeDrift: "0.000",
            CUSIP: "020002101",
            description: this.$refs.description.value,
            glAmt: "0.00",
            glPercent: "0.000",
            lastPrice: "43.020000",
            tradeReason: "Manual",
            moneyness: "",
            expiration: ""
            
        };
        this.newRow = tempRow;
        console.log(JSON.stringify(this.newRow));
        this.updateTable(this.newRow);
    }
  }
};
</script>
<style scoped>
#addPositionTableContainer {
  max-width: 1555px;
}

#addPositionTable {
  border-collapse: collapse;
  width: 100%;
}

.addPositionTable_Head {
  border: 1px solid #f9f2f4;
  color: #f9f2f4;
  background-color: #092a52;
  font-size: 11px;
  padding: 6px;
}

#addPositionTable_mainBody {
  background-color: #dedede;
}

.addPositionTable_mainCell {
  border: 2px solid #f9f2f4;
  color: #f9f2f4;
  background-color: #fff;
}

.addPositionTable_width1 {
  width: 10%;
}

.addPositionTable_width2 {
  width: 20%;
}

.addPositionTable_width3 {
  width: 5%;
  text-align: left;
}

.addPositionTable_InputField {
  height: 15px;
  border-style: none;
  text-align: left;
}

.addPositionTable_Dropdown {
  height: 25px;
  border-style: none;
  width: 100%;
}

#securityInputText {
  width: 95%;
}

#descriptionText {
  width: 95%;
}

.addPositionTable_InputField {
  height: 15px;
  border-style: none;
  text-align: left;
  padding: 5px;
}

#addPositionButton {
  float: right;
  width: 60px;
  text-align: center;
}

#addPositionTableContainer {
  max-width: 1555px;
}

#addPositionTable {
  border-collapse: collapse;
  width: 100%;
}
table,
select,
input {
  font-size: 10px;
  text-align: right;
}
</style>

