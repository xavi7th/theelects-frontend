<script>
    import ProfileCard from "$lib/components/ProfileCard.svelte";
	import Table from "$lib/components/Table.svelte";
</script>

<div class="dashboard">
    <div class="dashboard__profile card profile-card">
        <div class="card-body profile-card__body">
            <div class="profile-card__avatar"><img src="/src/lib/images/avatars/avatar-3.jpg" alt="">
            </div>
            <div class="profile-card__name">Helena Garcia</div>
            <div class="profile-card__email">stroyka@example.com</div>
            <div class="profile-card__edit"><a href="account-profile.html"
                    class="btn btn-secondary btn-sm">Edit Profile</a></div>
        </div>
    </div>
    <div class="dashboard__address card address-card address-card--featured">
        <div class="address-card__badge">Default Address</div>
        <div class="address-card__body">
            <div class="address-card__name">Helena Garcia</div>
            <div class="address-card__row">Random Federation<br>115302, Moscow<br>ul.
                Varshavskaya, 15-2-178</div>
            <div class="address-card__row">
                <div class="address-card__row-title">Phone Number</div>
                <div class="address-card__row-content">38 972 588-42-36</div>
            </div>
            <div class="address-card__row">
                <div class="address-card__row-title">Email Address</div>
                <div class="address-card__row-content">stroyka@example.com</div>
            </div>
            <div class="address-card__footer"><a href="account-edit-address.html">Edit
                    Address</a></div>
        </div>
    </div>
    <ProfileCard dasboardOrder={true} title="Recent Orders">
        <Table />
    </ProfileCard>
</div>
