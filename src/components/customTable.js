import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableFooter, TablePagination } from "@mui/material";
export default function CustomTable({ data, page, queryPageSize, handleChangePage, handleChangeRowsPerPage }) {
    return (
        <div className="w-4/6">
            <Paper className="container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Lead_Number</TableCell>
                            <TableCell align="right">Lead_Origin</TableCell>
                            <TableCell align="right">Lead_Source</TableCell>
                            <TableCell align="right">Notes</TableCell>
                            <TableCell align="right">Lead_Stage</TableCell>
                            <TableCell align="right">Engagement_Score</TableCell>
                            <TableCell align="right">TotalVisits</TableCell>
                            <TableCell align="right">Page_Views_Per_Visit</TableCell>
                            <TableCell align="right">Average_Time_Per_Visit</TableCell>
                            <TableCell align="right">Last_Activity</TableCell>
                            <TableCell align="right">Last_Activity_Date</TableCell>
                            <TableCell align="right">Lead_Conversion_Date</TableCell>
                            <TableCell align="right">Cityold</TableCell>
                            <TableCell align="right">Specialization</TableCell>
                            <TableCell align="right">Entrance_Test</TableCell>
                            <TableCell align="right">What_is_your_current_occupation</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data?.data?.leads?.map((row, index) => (
                            <TableRow key={row.Lead_Number}>
                                <TableCell>{row.Lead_Number}</TableCell>
                                <TableCell>{row.Lead_Origin}</TableCell>
                                <TableCell>{row.Lead_Source}</TableCell>
                                <TableCell>{row.Notes}</TableCell>
                                <TableCell>{row.Lead_Stage}</TableCell>
                                <TableCell>{row.Engagement_Score}</TableCell>
                                <TableCell>{row.TotalVisits}</TableCell>
                                <TableCell>{row.Page_Views_Per_Visit}</TableCell>
                                <TableCell>{row.Average_Time_Per_Visit}</TableCell>
                                <TableCell>{row.Last_Activity}</TableCell>
                                <TableCell>{row.Last_Activity_Date}</TableCell>
                                <TableCell>{row.Lead_Conversion_Date}</TableCell>
                                <TableCell>{row.Cityold}</TableCell>
                                <TableCell>{row.Specialization}</TableCell>
                                <TableCell>{row.Entrance_Test}</TableCell>
                                <TableCell>{row.What_is_your_current_occupation}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={3}
                    rowsPerPage={queryPageSize}
                    count={data?.data?.count}
                    page={page}
                    SelectProps={{
                        inputProps: {
                            "aria-label": "rows per page",
                        },
                        native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
