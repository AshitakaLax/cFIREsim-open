<script lang="ts">
	export let name: string;
	import Banner, { Label } from '@smui/banner/styled';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';
  import Button from '@smui/button/styled';

  let open = false;
  let centered = false;
  let mobileStacked = true;
 
  let closedReason = 'None yet.';
</script>

<main>
	<div class="top-app-bar-container">
		<TopAppBar variant="static">
			<Row>
				<Section>
					<Title>Top App Bar</Title>
				</Section>
			</Row>
		</TopAppBar>
		<Banner
			bind:open
			bind:centered
			bind:mobileStacked
			on:MDCBanner:closed={(event) => (closedReason = event.detail.reason)}
		>
			<Label slot="label">This is a banner with no icon and some actions.</Label>
			<svelte:fragment slot="actions">
				<Button secondary>Secondary</Button>
				<Button>Primary</Button>
			</svelte:fragment>
		</Banner>
		<div>
		</div>
	</div>
	<h1>Hey Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<link rel="stylesheet" href="/build/smui.css" />
<link rel="stylesheet" href="/build/smui-dark.css" />
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@4.0.0/bare.min.css"
/>
<!-- Material Icons -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<!-- Roboto -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
/>
<!-- Roboto Mono -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto+Mono"
/>