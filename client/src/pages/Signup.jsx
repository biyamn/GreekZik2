import { useForm } from 'react-hook-form';
import axios from 'axios';

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log('submit되었습니다');
      console.log(data);
      const response = await axios.post(
        'http://localhost:3333/users/join',
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          width: '10rem',
        }}
      >
        <input
          type="text"
          placeholder="닉네임"
          {...register('nickname', { required: true })}
        />
        {errors.nickname && <span>nickname is required</span>}
        <input
          type="email"
          placeholder="이메일"
          {...register('email', { required: true })}
        />
        {errors.email && <span>email is required</span>}
        <input
          type="password"
          placeholder="비밀번호"
          {...register('password', { required: true })}
        />
        {errors.password && <span>password is required</span>}
        <input type="submit" value="회원가입하기" />
      </form>
    </div>
  );
}

export default Signup;