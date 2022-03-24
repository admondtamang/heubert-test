import MaterialTable from "material-table";
import React, { useState } from "react";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
export default function MaterialUITable({ columns, name }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    // const { data, error } = useCustomSwr(`/api/leads?limit=${rowsPerPage}&pageNumber=${page}&searchTerms=${value}&orderBy=${column}`);

    return (
        <div>
            <MaterialTable
                title={name}
                icons={tableIcons}
                style={{ padding: 30 }}
                columns={columns}
                options={{ debounceInterval: 700, padding: "dense", filtering: true }}
                data={(query) =>
                    new Promise((resolve, reject) => {
                        // prepare your data and then call resolve like this:
                        let url = "/api/leads?";
                        //searching
                        if (query.search) {
                            url += `searchTerms=${query.search}`;
                        }
                        //sorting
                        if (query.orderBy) {
                            url += `&_sort=${query.orderBy.field}&_order=${query.orderDirection}`;
                        }
                        //filtering
                        if (query.filters.length) {
                            const filter = query.filters.map((filter) => {
                                return `&${filter.column.field}${filter.operator}${filter.value}`;
                            });
                            url += filter.join("");
                        }
                        //pagination
                        url += `&_page=${query.page + 1}`;
                        url += `&_limit=${query.pageSize}`;

                        fetch(url)
                            .then((resp) => resp.json())
                            .then((resp) => {
                                resolve({
                                    data: resp.data.leads, // your data array
                                    page: resp.data.page - 1, // current page number
                                    totalCount: resp.data.count, // total row number
                                });
                            });
                    })
                }
            />
        </div>
    );
}
