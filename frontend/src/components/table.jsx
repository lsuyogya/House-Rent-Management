import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination,
	Typography,
	Paper,
} from "@material-ui/core";
import { useState } from "react";
// import { useRouteMatch, useHistory } from 'react-router';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	status: {
		display: "inline-block",
		borderRadius: "8px",
		padding: "3px 10px",
		width: "50px",
		textAlign: "center",
		justifyContent: "center",
		fontSize: "0.875rem",
		color: "white",
		textTransform: "capitalize",
		backgroundColor: "grey",
		boxShadow: "0px 4px 4px 0px hsla(0, 0%, 0%, 0.25)",
	},
});

const Tables = ({ label = "Table", colNames, rows }) => {
	const classes = useStyles();

	// const { url } = useRouteMatch();
	// const history = useHistory();

	const [page, setPage] = useState(0);
	const rowsPerPage = 6;

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<div className="maxWidth">
			<TableContainer
				component={Paper}
				className="tableContainer"
				style={{
					backgroundColor: "hsla(0, 0%, 68%, 1)",
					height: `calc(33*${rowsPerPage + 1}px)`,
				}}
			>
				<Table size="small" aria-label={label}>
					<TableHead>
						<TableRow>
							{colNames.map((names, i) => (
								<TableCell key={colNames[i]}>
									{" "}
									{names}{" "}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
							)
							.map((row) => (
								<TableRow
									key={row.bill_no}
									className="invoiceTableRows"
									// onClick={() => history.push(`${url}/Invoice${row.id}`,{row})
									// onClick={() =>
									// 	history.push(
									// 		`${url}/Invoices${row.id}`,
									// 		{ row }
									// 	)
									// }
								>
									<TableCell> {row.bill_no} </TableCell>
									<TableCell>{row.amount}</TableCell>
									<TableCell>{row.date}</TableCell>
									<TableCell>{row.house_no}</TableCell>
									<TableCell>{row.house_name}</TableCell>
									<TableCell>{row.status}</TableCell>
									{/* <TableCell>
										<Typography
											className={classes.status}
											style={{
												backgroundColor:
													(row.status ===
														"approved" &&
														"hsla(151, 71%, 42%, 1)") ||
													(row.status === "draft" &&
														"hsla(45, 100%, 70%, 1)") ||
													(row.status ===
														"rejected" &&
														"hsla(0, 79%, 57%, 1)") ||
													(row.status === "pending" &&
														"hsla(187, 61%, 50%, 1)") ||
													(row.status === "expired" &&
														"hsla(32, 97%, 61%, 1)"),
											}}
										>
											{row.status}
										</Typography>
									</TableCell> */}
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				labelDisplayedRows={({ to, count }) =>
					`Page ${Math.round(to / rowsPerPage)} of ${Math.round(
						count / rowsPerPage
					)} \n Showing ${to} of ${count} results`
				}
				style={{ whiteSpace: "pre-line" }}
			/>
		</div>
	);
};

export default Tables;
