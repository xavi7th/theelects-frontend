<script>
	import ProfileCard from "$lib/components/ProfileCard.svelte";
</script>

<ProfileCard title="Change Password">
    <div class="card-body">
        <div class="row no-gutters">
            <div class="col-12 col-lg-7 col-xl-6">
                <div class="form-group"><label for="password-current">Current
                        Password</label> <input type="password" class="form-control"
                        id="password-current" placeholder="Current Password"></div>
                <div class="form-group"><label for="password-new">New Password</label>
                    <input type="password" class="form-control" id="password-new"
                        placeholder="New Password"></div>
                <div class="form-group"><label for="password-confirm">Reenter New
                        Password</label> <input type="password" class="form-control"
                        id="password-confirm" placeholder="Reenter New Password"></div>
                <div class="form-group mt-5 mb-0"><button
                        class="btn btn-primary">Change</button></div>
            </div>
        </div>
    </div>
</ProfileCard>
