import { createClient } from '@/utils/supabase/server';

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from('menu').select();

  return (
    <pre>
      {JSON.stringify(instruments, null, 2)}
    </pre>
  );
}
