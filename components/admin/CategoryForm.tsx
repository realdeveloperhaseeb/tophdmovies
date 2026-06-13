'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useState } from 'react';
import { saveCategory, type ActionState } from '@/lib/actions';
import { slugify } from '@/lib/utils';
import type { Category } from '@/lib/types';

const initial: ActionState = {};

export function CategoryForm({ category }: { category?: Category | null }) {
  const [state, action] = useFormState(saveCategory, initial);
  const [name, setName] = useState(category?.name ?? '');
  const [slug, setSlug] = useState(category?.slug ?? '');
  const [touched, setTouched] = useState(Boolean(category?.slug));

  return (
    <form action={action} key={category?.id ?? 'new'} className="space-y-4">
      <h2 className="text-lg font-bold">{category ? 'Edit Category' : 'Add Category'}</h2>
      {category?.id && <input type="hidden" name="id" value={category.id} />}

      {state.error && <p className="text-sm text-red-400">{state.error}</p>}

      <div>
        <label className="label">Name</label>
        <input
          name="name"
          required
          className="input"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (!touched) setSlug(slugify(e.target.value));
          }}
        />
      </div>
      <div>
        <label className="label">Slug</label>
        <input
          name="slug"
          className="input"
          value={slug}
          onChange={(e) => {
            setSlug(e.target.value);
            setTouched(true);
          }}
        />
      </div>
      <div>
        <label className="label">Short Description</label>
        <textarea name="description" rows={3} className="input resize-y" defaultValue={category?.description ?? ''} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label">Display Order</label>
          <input
            name="display_order"
            type="number"
            className="input"
            defaultValue={category?.display_order ?? 0}
          />
        </div>
        <div>
          <label className="label">Status</label>
          <select name="status" className="input" defaultValue={category?.status ?? 'active'}>
            <option value="active">Active</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>
      </div>

      <Submit isEdit={Boolean(category)} />
    </form>
  );
}

function Submit({ isEdit }: { isEdit: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn-primary w-full">
      {pending ? 'Saving…' : isEdit ? 'Update Category' : 'Add Category'}
    </button>
  );
}
