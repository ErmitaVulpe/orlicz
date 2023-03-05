function sortTable(n) {
  var switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    for (i = 0; i < dict.length - 1; i++) {
      shouldSwitch = false;
      x = dict[i][n];
      y = dict[i + 1][n];

      if (n == 0) {
        if (dir == "asc") {
          if (x > y) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x < y) {
            shouldSwitch = true;
            break;
          }
        }
      } else {
        if (dir == "asc") {
          if (parseFloat(x) > parseFloat(y)) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (parseFloat(x) < parseFloat(y)) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }
    if (shouldSwitch) {
      dict.move(i + 1, i)
      backend_names.move(i + 1, i)
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
  gen_table2()
  merge_cells()
  arrows(n)
}

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};


function arrows(n) {
  header = document.getElementsByClassName("fa fa-fw fa-sort")
  header = Array.prototype.slice.call(header, 0)
  header.move(1, 7)

  for (let i = 0; i < header.length; i++) {
    if (i == n) {continue}

    header[i].classList.remove("fa-sort-desc")
    header[i].classList.remove("fa-sort-asc")
  }

  cell = header[n]
  check = cell.classList.contains("fa-sort-desc")

  if (check) {
    cell.classList.remove("fa-sort-desc")
    cell.classList.add("fa-sort-asc")
  } else {
    cell.classList.remove("fa-sort-asc")
    cell.classList.add("fa-sort-desc")
  }
}

