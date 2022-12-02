import SaveIcon from '@mui/icons-material/Save'
import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'

export const MuiLoadingButton = () => {
	return (
		<Stack direction="row" spacing={2}>
			<LoadingButton variant="outlined">Submit</LoadingButton>
			<LoadingButton loading variant="outlined">
				Submit
			</LoadingButton>
			<LoadingButton loadingIndicator="Loading..." variant="outlined">
				Fetch data
			</LoadingButton>
			<LoadingButton loading loadingIndicator="Loading..." variant="outlined">
				Fetch data
			</LoadingButton>
			<LoadingButton
				loadingPosition="start"
				startIcon={<SaveIcon />}
				variant="outlined"
			>
				Save
			</LoadingButton>
			<LoadingButton
				loading
				loadingPosition="start"
				startIcon={<SaveIcon />}
				variant="outlined"
			>
				Save
			</LoadingButton>
		</Stack>
	)
}