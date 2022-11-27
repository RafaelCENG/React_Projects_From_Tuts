import SendIcon from '@mui/icons-material/Send'
import { Button, ButtonGroup, IconButton, Stack } from '@mui/material'

const MuiButton = () => {
	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<Button variant="text" href="https://google.com">
					Text
				</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<Button variant="contained" color="primary">
					Primary
				</Button>
				<Button variant="contained" color="secondary">
					secondary
				</Button>
				<Button variant="contained" color="error">
					error
				</Button>
				<Button variant="contained" color="warning">
					warning
				</Button>
				<Button variant="contained" color="info">
					info
				</Button>
				<Button variant="contained" color="success">
					success
				</Button>
			</Stack>

			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained" size="small">
					Small
				</Button>
				<Button variant="contained" size="medium">
					medium
				</Button>
				<Button variant="contained" size="large">
					large
				</Button>
			</Stack>

			<Stack spacing={2} direction="row">
				<Button
					variant="contained"
					startIcon={<SendIcon />}
					disableRipple
					onClick={() => alert('Clicked')}
				>
					Send
				</Button>
				<Button variant="contained" endIcon={<SendIcon />} disableElevation>
					Send
				</Button>
				<IconButton aria-label="send" color="success" size="small">
					<SendIcon />
				</IconButton>
			</Stack>
			<Stack direction="row">
				<ButtonGroup
					variant="contained"
					orientation="vertical"
					size="small"
					color="secondary"
					arial-label="alignment button group"
				>
					<Button onClick={() => alert('Left Click')}>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>
		</Stack>
	)
}

export default MuiButton