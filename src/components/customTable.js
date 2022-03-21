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
                            <TableCell>Lead_Origin</TableCell>
                            <TableCell>Lead_Source</TableCell>
                            <TableCell>Notes</TableCell>
                            <TableCell>Lead_Stage</TableCell>
                            <TableCell>Engagement_Score</TableCell>
                            <TableCell>TotalVisits</TableCell>
                            <TableCell>Page_Views_Per_Visit</TableCell>
                            <TableCell>Average_Time_Per_Visit</TableCell>
                            <TableCell>Last_Activity</TableCell>
                            <TableCell>Last_Activity_Date</TableCell>
                            <TableCell>Lead_Conversion_Date</TableCell>
                            <TableCell>Cityold</TableCell>
                            <TableCell>Specialization</TableCell>
                            <TableCell>Entrance_Test</TableCell>
                            <TableCell>What_is_your_current_occupation</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data?.data?.map((row, index) => (
                            <TableRow key={index}>
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
                    count={data?.count}
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
