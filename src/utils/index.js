import { format } from 'date-fns';

// eslint-disable-next-line import/prefer-default-export
export function dateToString(date) {
  // formatの文字列を間違えると正しく入力されている範囲でしか、日付が有効にならないため、注意！
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

export function translateErrors(code) {
  const error = {
    title: 'エラー',
    description: '時間を置いてお試しださい',
  };
  switch (code) {
    // error handling for log in
    case 'auth/invalid-email':
      error.description = 'メールアドレスが不正です。';
      break;
    case 'auth/user-disabled':
      error.description = 'アカウントが無効です。';
      break;
    case 'auth/user-not-found':
      error.description = 'ユーザーが見つかりませんでした。';
      break;
    case 'auth/wrong-password':
      error.description = 'パスワードが正しくありません';
      break;
    // error handling for sign up
    case 'auth/email-already-in-use':
      error.description = 'メールアドレスが既に使用されています。';
      break;
    case 'auth/operation-not-allowed':
      error.description = '開発者にお問合せください。';
      break;
    case 'auth/weak-password':
      error.description = 'パスワードが簡単すぎます。';
      break;
    default:
      error.description = '時間を置いてお試しください';
  }
  return error;
}
