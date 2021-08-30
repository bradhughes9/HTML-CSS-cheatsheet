var table = new Vue({
    el: '#app',
    data: {
      currentPage: 1,
      elementsPerPage: 3,
      ascending: false,
      sortColumn: '',
      tableRows: [
        { tag: "<table>", name: "Table", description: 'The wrapper element for all HTML tables.' },
        { tag: "<thead>", name: "Table Head", description: 'The set of rows defining the column headers in a table.' },
        { tag: "<tbody>", name: "Table Body", description: 'The set of rows containing actual table data.' },
        { tag: "<tr>", name: "Table Row", description: 'The table row container.' },
        { tag: "<td>", name: "Table Data", description: 'The table row container.' },
        { tag: "<tfoot>", name: "Table Foot", description: 'The set of rows defining the footer in a table.' }
      ],
      attributeRows: [
        { tag: "colspan", name: "Column Span", description: 'Defines how many columns a td element should span.' },
        { tag: "rowspan", name: "Row Span", description: 'Defines how many rows a td element should span.' }
      ]
    },
    methods: {
        "sortTable": function sortTable(col) {
          if (this.sortColumn === col) {
            this.ascending = !this.ascending;
          } else {
            this.ascending = true;
            this.sortColumn = col;
          }
    
          var ascending = this.ascending;
    
          this.tableRows.sort(function(a, b) {
            if (a[col] > b[col]) {
              return ascending ? 1 : -1
            } else if (a[col] < b[col]) {
              return ascending ? -1 : 1
            }
            return 0;
          })
        }
      },
      computed: {
        "columns": function columns() {
          if (this.tableRows.length == 0) {
            return [];
          }
          return Object.keys(this.tableRows[0])
        }
      }
    });