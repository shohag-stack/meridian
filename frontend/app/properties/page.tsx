import { Suspense } from 'react';
import PropertiesClient from './PropertiesClient';
import { getProperties } from '@/(core)/fetch/getProperties';

export default async function PropertiesPage() {

  const properties = await getProperties()

  console.log("showing properties from property page", properties)

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neutral-400">Loading properties…</div>
      </div>
    }>
      <PropertiesClient properties={properties} />
    </Suspense>
  );
}
