<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      user$.set(user);
      localStorage.setItem("token", token);
    } catch (e) {
      console.log(e);
    }
  };
</script>

<div>
  {#if $user$}
    <div>{$user$?.displayName} 로그인됨</div>
  {/if}
  <div>로그인하기</div>
  <button class="login-btn" on:click={loginWithGoogle}>
    <img
      src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
      alt=""
      class="google-img"
    />
    <div>Google로 시작하기</div>
    <div />
  </button>
</div>

<style>
  .login-btn {
    width: 200px;
    height: 50px;
    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
  }
  .google-img {
    width: 20px;
  }
</style>
