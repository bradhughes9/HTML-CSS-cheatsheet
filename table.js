var table = new Vue({
    el: '#app',
    data:
        {
          tableRows: 
          [
            { tag: "<table>", name: "Table", description: 'The wrapper element for all HTML tables.' },
            { tag: "<thead>", name: "Table Head", description: 'The set of rows defining the column headers in a table.' },
            { tag: "<tbody>", name: "Table Body", description: 'The set of rows containing actual table data.' },
            { tag: "<tr>", name: "Table Row", description: 'The table row container.' },
            { tag: "<td>", name: "Table Data", description: 'The table row container.' },
            { tag: "<tfoot>", name: "Table Foot", description: 'The set of rows defining the footer in a table.' }
          ],
          attributeRows:
          [
            { Attribute: "colspan", name: "Column Span", description: 'Defines how many columns a td element should span.' },
            { Attribute: "rowspan", name: "Row Span", description: 'Defines how many rows a td element should span.' }
          ]
        },
        computed: {
          //For the tableRows
          "columns": function columns() {
            if (this.tableRows.length == 0) {
              return [];
            }
            return Object.keys(this.tableRows[0])
          },
          //For the attribute rows
          "attributeColumns": function columns() {
            if (this.attributeRows.length == 0) {
              return [];
            }
            return Object.keys(this.attributeRows[0])
          }
        }
      });