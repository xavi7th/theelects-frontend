<script>
	import ProfileCard from "$lib/components/ProfileCard.svelte";
</script>

<ProfileCard title="Edit Profile">
    <div class="card-body">
        <div class="row no-gutters">
            <div class="col-12 col-lg-7 col-xl-6">
                <div class="form-group"><label for="profile-first-name">First Name</label>
                    <input type="text" class="form-control" id="profile-first-name"
                        placeholder="First Name"></div>
                <div class="form-group"><label for="profile-last-name">Last Name</label>
                    <input type="text" class="form-control" id="profile-last-name"
                        placeholder="Last Name"></div>
                <div class="form-group"><label for="profile-email">Email Address</label>
                    <input type="email" class="form-control" id="profile-email"
                        placeholder="Email Address"></div>
                <div class="form-group"><label for="profile-phone">Phone Number</label>
                    <input type="text" class="form-control" id="profile-phone"
                        placeholder="Phone Number"></div>
                <div class="form-group mt-5 mb-0"><button
                        class="btn btn-primary">Save</button></div>
            </div>
        </div>
    </div>
</ProfileCard>
