export function selectRegion(id) {
  return (
    {
      type: 'selectRegion',
      payload: {
        id,
      },
    }
  );
}